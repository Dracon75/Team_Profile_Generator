class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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

    getOfficeNumber() {
        this.officeNumber = document.getElementById("officeNumber");
    }

    getRole() {
        return Manager;
    }

    getName();
    getId();
    getEmail();
    getRole();
    getOfficeNumber();
