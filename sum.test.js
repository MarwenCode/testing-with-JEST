
const sum = require("./sum");
const { default: expect } = require("expect");

it("should add 1 +2 to equal 3 ", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

it("null", () => {
  const n = null;
  expect(n).toBeFalsy();
  expect(n).not.toBeTruthy();
  expect(n).toBeNull();
});

it("tow plus two", () => {
  const value = 2 + 2;
  expect(value).toBe(4);
});


describe("numbers", () =>  { 
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3)
    })

    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.299995555)
    })
})


//arrays
describe("arrays", () => {
    const shoppingList = [
        'diappers', "kleenex", 'milk'
    ]
    expect(shoppingList).toContain("milk");
})
