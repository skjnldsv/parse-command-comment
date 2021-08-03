import parseCommand from "../parseCommand";

describe("parseCommand", () => {
  test("Parse valid command", () => {
    const result = parseCommand("/get test 123456");

    expect(result).toStrictEqual(["/get", "test", "123456"]);
  });
});
