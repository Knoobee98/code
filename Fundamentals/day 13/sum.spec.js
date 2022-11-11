const sum = require("./sum.js");

test("testing sum function", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 5)).toBe(10);
});