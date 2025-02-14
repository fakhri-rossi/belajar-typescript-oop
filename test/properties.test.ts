describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string = "Anonymous";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "John");
    customer.age = 20;

    console.info(customer);
  });

  it("should can have methods", () => {
    const customer = new Customer(1, "Rossi");
    customer.sayHello("Andi");
  });
});
