import parseCommand from '../parseCommand';

describe('parseCommand', () => {
  test('Parse valid command', () => {
    const result = parseCommand('/get test 123456');

    expect(result).toStrictEqual(['get', 'test', '123456']);
  });

  test('Parse valid multiline command', () => {
    const result = parseCommand(`/get test 123456\n\nSee comment above`);

    expect(result).toStrictEqual(['get', 'test', '123456']);
  });

  test('Parse valid multiline command with carriage return', () => {
    const result = parseCommand(`/get test 123456\r\n\r\nSee comment above`);

    expect(result).toStrictEqual(['get', 'test', '123456']);
  });

  test('Parse invalid command', () => {
    const result = (): Array<string> => parseCommand('/get test 789;${12346}');

    expect(result).toThrow(
      'Invalid character found in the command or in the command argument(s): ;, $, {, }',
    );
  });

  test('Parse invalid multiline command', () => {
    const result = (): Array<string> =>
      parseCommand('Please bot do the following\n\n/test command 0000');

    expect(result).toThrow('Command should start with a leading slash');
  });
});
