class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github
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

    getGitHub() {
        this.github = document.getElementById("gitProfile");
    }

    getRole() {
        return Engineer;
    }

    getName();
    getId();
    getEmail();
    getRole();
    getGitHub();
