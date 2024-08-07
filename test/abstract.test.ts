describe("Abstract Class", () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    // abstract method bisa
    abstract sayHello(name: string): void;

    // concrete method bisa
    sayHi(name: string): void {
      console.info(`Hello, ${name}`);
    }
  }

  class RegularCustomer extends Customer {
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(
        `Hello ${name}, my name is ${this.name}, I'm a Regular Customer`
      );
    }
  }

  it("should support in ts", () => {
    // const customer1 = new Customer(1, 'Eko') // error, gabisa, krn abstract class gabisa diimplement, harus implement childnya

    const customer1 = new RegularCustomer(1, "Eko");
    customer1.sayHello("Rossi");
  });
});
