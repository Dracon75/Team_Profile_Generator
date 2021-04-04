class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {
        this.name = document.getElementById("employeeName");
    }

    getId() {
        this.id = document.getElementById("employeeID");
    }

    getEmail() {
        this.email = document.getElementById("email");
    }

    getSchool() {
        this.school = document.getElementById("school");
    }

    getRole() {
        return Intern;
    }

    getName();
    getId();
    getEmail();
    getRole();
    getSchool();