describe("Instanceof", () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const andi = new Manager();

  it("should problem using typeof", () => {
    console.info(typeof budi);
    console.info(typeof andi);
  });

  it("should support instanceof", () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);

    expect(andi instanceof Employee).toBe(false);
    expect(andi instanceof Manager).toBe(true);
  });
});
