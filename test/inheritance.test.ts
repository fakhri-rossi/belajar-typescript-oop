describe("Inheritance", () => {
  // parent class
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support ", () => {
    const employee = new Employee("Rossi");
    console.info(employee); // Rossi

    const manager = new Manager("Fakhri");
    console.info(manager); // Fakhri

    const director = new Director("Stark");
    console.info(director); // Stark
  });
});
