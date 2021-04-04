class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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

  getRole() {
    return Employee;
  }

  getName();
  getId();
  getEmail();
  getRole();