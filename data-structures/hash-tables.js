// * Store key-value pairs
// * Like arrays, but keys are not ordered
// * Fast when finding, adding, and removing values
// * We can use arrays and hash functions which convert keys to valid array indices
// * Keys should be unique (not implemeneted in below solution)

// * What makes a good hash function?
// Fast (constant time)
// Doesn't cluster outputs at specific indices, but distributes uniformly
// Deterministic (same input yields same output)

// Using prime as multiplier and when passing an array length can drastically speed up the algorithm
function hash(key, arrayLength) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLength;
    }

    return total;
}

// * Two strategies to deal with collision are separate chaining and linear probing
// Separate chaining - at each index in array, store values using more sophisticated data struct (arr/linked list)
// Linear Probing - when we find a collision, search through the array to find the next empty slot
// With separate chaining you can have more data than the length of the array

// * Big O
// Insertion - O(1)
// Accessing - O(1)
// Removal - O(1)

class HashTable {
    // 53 is prime
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    #hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let hashedKey = this.#hash(key);

        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }

        this.keyMap[hashedKey].push([key, value]);

        return this.keyMap;
    }

    get(key) {
        const hashedValue = this.#hash(key);

        if (!this.keyMap[hashedValue]) return undefined;

        for (let i = 0; i < this.keyMap[hashedValue].length; i++) {
            let currentKey = this.keyMap[hashedValue][i][0];
            let currentValue = this.keyMap[hashedValue][i][1];

            if (currentKey === key) {
                return currentValue;
            }
        }
    }

    keys() {
        let keyArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let currentKey = this.keyMap[i][j][0];
                    keyArray.push(currentKey);
                }
            }
        }

        return keyArray;
    }

    values() {
        let valueArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let currentValue = this.keyMap[i][j][1];
                    valueArray.push(currentValue);
                }
            }
        }

        return valueArray;
    }

    uniqueValues() {
        let valueArray = [];
        let freqCounter = {};

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let currentKey = this.keyMap[i][j][1];
                    freqCounter[currentKey] = freqCounter[currentKey] ? freqCounter[currentKey] += 1 : 1;
                    if (freqCounter[currentKey] === 1) {
                        valueArray.push(currentKey);
                    }
                }
            }
        }

        return valueArray;
    }
}

const table = new HashTable();
table.set('pink', '112233');
table.set('red', '112234');
table.set('blue', '112235');
table.set('green', '112235');
table.set('yellow', '112235');
table.set('lightblue', '112235');
table.set('lightgreen', '112235');
table.set('darkred', '112235');
table.set('magenta', '112234');
console.log(table.get('magenta'));
console.log(table.keys());
console.log(table)
console.log(table.values())
console.log(table.uniqueValues())
