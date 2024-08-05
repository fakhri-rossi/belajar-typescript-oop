describe("", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support parameter properties", () => {
    const person = new Person("Eka");
    console.info(person.name);

    person.name = "Eko";
    console.info(person.name);
  });
});
