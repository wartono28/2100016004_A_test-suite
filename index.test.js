// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("capitalize", () => {
  test("should return uppercased Hello", () => {
    // Write ur test-code here!
    const result = capitalize("hello");
expect(result).toBe("Hello");
  });

  // write another 3 test case here!
    it("should capitalize the first letter of a string even if it starts with a number", () => {
    const result = capitalize("regerg7");
    expect(result).toBe("Regerg7");
  });
// 
  it("should capitalize the first letter of a string even if it contains special characters", () => {
    const result = capitalize("c487c5499");
    expect(result).toBe("C487c5499");
  });
// 
  it("should return an empty string if the input is an empty string", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });
});

// @ filterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("filterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ epochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("epochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
        const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  // write another 3 test case here!
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
        const result = epochDateToUTC(1);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:01 GMT");
  });
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
        const result = epochDateToUTC(2);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:02 GMT");
  });
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
        const result = epochDateToUTC(3);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:03 GMT");
  });
});
