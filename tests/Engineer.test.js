const Engineer = require("../lib/Engineer");

test("Set GitHUb account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jason", 1, "jason@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jason", 1, "jason@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jason", 1, "jason@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});


