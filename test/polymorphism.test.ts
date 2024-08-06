describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(person: Employee) {
    console.info(`Hello ${person.name}`);
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
});
