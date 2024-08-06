describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(person: Employee) {
    if (person instanceof VicePresident) {
      const vp = person as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (person instanceof Manager) {
      const manager = person as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      const employee = person as Employee;
      console.info(`Hello Employee ${employee.name}`);
    }
  }

  function sayHelloWrong(person: Employee) {
    if (person instanceof Manager) {
      const manager = person as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else if (person instanceof VicePresident) {
      const vp = person as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      const employee = person as Employee;
      console.info(`Hello Employee ${employee.name}`);
    }
  }

  it("should support polymorphism", () => {
    let employee: Employee = new Employee("Rossi");
    console.info(employee);

    employee = new Manager("Eko");
    console.info(employee);

    employee = new VicePresident("Andi");
    console.info(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Eko"));
    sayHello(new Manager("Andi"));
    sayHello(new VicePresident("Joko"));
  });

  it("should support wrong method parameter polymorphism", () => {
    sayHelloWrong(new Employee("Eko"));
    sayHelloWrong(new Manager("Andi"));
    sayHelloWrong(new VicePresident("Joko"));
  });
});
