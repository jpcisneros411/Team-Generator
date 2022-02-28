const Manager = require("../lib/Manager");

test("Set office number", () => {
  const testValue = 100;
  const e = new Manager("Jason", 1, "jason@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Jason", 1, "jason@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Office number from getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Jason", 1, "jason@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});