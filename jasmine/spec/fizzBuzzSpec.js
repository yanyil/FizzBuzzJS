describe("FizzBuzz", function() {
  it("prints 1 to 100", function() {
    var test = FizzBuzz();
    expect(test).toContain(1);
  });

  it("prints fizz for number divisible by 3", function() {
    var test = FizzBuzz();
    expect(test[2]).toEqual("Fizz");
  });

  it("prints fizz for number divisible by 5", function() {
    var test = FizzBuzz();
    expect(test[4]).toEqual("Buzz");
  });

  it("prints fizz for number divisible by 15", function() {
    var test = FizzBuzz();
    expect(test[14]).toEqual("FizzBuzz");
  });
});