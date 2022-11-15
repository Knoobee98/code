const {Bmi, BuzzFizz} = require('./exercise4.js');

test("bmi testing", () => {
    expect(Bmi(50, 160)).toBe(19.53125);
    expect(Bmi(50, 170)).toBe(17.301038062283737);
    expect(Bmi(50, 180)).toBe(15.432098765432098);
    expect(Bmi(50, 190)).toBe(13.6986301369863);
    expect(Bmi(50, 200)).toBe(12.5);
})

test("testing buzzfizz", () => {
    expect(BuzzFizz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    expect(BuzzFizz(10)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]);
});