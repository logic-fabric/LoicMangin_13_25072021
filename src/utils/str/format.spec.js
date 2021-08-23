import { formatAmount } from "./format";

describe("WHEN using formatAmount()", () => {
  test("THEN a value with an integer part of 3 digits or less will be unchanged", () => {
    expect(formatAmount("421")).toBe("421.00");
    expect(formatAmount(421)).toBe("421.00");

    expect(formatAmount("421.4")).toBe("421.40");
    expect(formatAmount(421.4)).toBe("421.40");

    expect(formatAmount("421.42")).toBe("421.42");
    expect(formatAmount(421.42)).toBe("421.42");
  });
  
  test("THEN a value with an integer part of 4 digits or more will be formated with a dash", () => {
    expect(formatAmount(1234)).toBe("1,234.00");
    expect(formatAmount(1234.4)).toBe("1,234.40");
    expect(formatAmount(1234.42)).toBe("1,234.42");

    expect(formatAmount(123456)).toBe("123,456.00");
    expect(formatAmount(123456.4)).toBe("123,456.40");
    expect(formatAmount(123456.42)).toBe("123,456.42");

    expect(formatAmount(1234567)).toBe("1,234,567.00");
    expect(formatAmount(1234567.4)).toBe("1,234,567.40");
    expect(formatAmount(1234567.42)).toBe("1,234,567.42");
  });
  
});
