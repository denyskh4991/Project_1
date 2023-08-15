class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    present() {
        const index = this.attendance.findIndex(item => item === null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Масив відвідуваності вже повністю заповнений!");
        }
    }

    absent() {
        const index = this.attendance.findIndex(item => item === null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Масив відвідуваності вже повністю заповнений!");
        }
    }

    calculateAge(currentYear) {
        return currentYear - this.birthYear;
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRatio = this.attendance.filter(item => item === true).length / this.attendance.length;

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Іван", "Петров", 2000);

const student2 = new Student("Марія", "Сидорова", 2002);
const student3 = new Student("Олександр", "Коваль", 2001);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();

student3.present();
student3.absent();
student3.present();

student1.grades = [95, 92, 88, 97];
student2.grades = [87, 90, 92, 85];
student3.grades = [78, 86, 92, 80];

console.log(student1.firstName, student1.lastName, student1.calculateAge(2023));
console.log(student2.firstName, student2.lastName, student2.calculateAge(2023));
console.log(student3.firstName, student3.lastName, student3.calculateAge(2023));

console.log(student1.firstName, student1.lastName, '"' + student1.summary() + '"');
console.log(student2.firstName, student2.lastName, '"' + student2.summary() + '"');
console.log(student3.firstName, student3.lastName, '"' + student3.summary() + '"');