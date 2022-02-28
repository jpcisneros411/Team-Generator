const Intern = require("../lib/Intern");

test("Set school", () => {
  const testValue = "YOU";
  const e = new Intern("Jason", 1, "jason@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jason", 1, "jason@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "YOU";
  const e = new Intern("Jason", 1, "jason@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

