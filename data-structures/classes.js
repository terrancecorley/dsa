class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.scores = [];
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    static enrollStudents(...students) {
        // send email
        console.log('Emailing students');
    }
}

let sally = new Student('Sally', 'Mae');
console.log(sally);
Student.enrollStudents();
