describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar TypeScript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Fakhri Rossi";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support static", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });

  it("should support statis method", () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5, 12, 13, 14));
  });
});
