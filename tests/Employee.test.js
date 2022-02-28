const Employee = require("../lib/Employee");

test("Create new employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Set name of employee", () => {
  const name = "Jason";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set Id of employee", () => {
  const testValue = 100;
  const e = new Employee("Jason", testValue);
  expect(e.id).toBe(testValue);
});

test("Set email of employee", () => {
  const testValue = "jason@test.com";
  const e = new Employee("Jason", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Get name from getName()", () => {
  const testValue = "Jason";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Get id from getId()", () => {
  const testValue = 100;
  const e = new Employee("Jason", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Get email via getEmail()", () => {
  const testValue = "jason@test.com";
  const e = new Employee("Jason", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Jason", 1, "jason@test.com");
  expect(e.getRole()).toBe(testValue);
});