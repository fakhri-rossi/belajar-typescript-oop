describe("Method Overriding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}, I'm your Manager`);
    }
  }

  it("should support", () => {
    const employee = new Employee("Andi");
    employee.sayHello("Budi"); // Hello Budi, my name is Andi

    const manager = new Manager("Rossi");
    manager.sayHello("Budi"); // Hello Budi, my name is Rossi, I'm your manager
  });
});
