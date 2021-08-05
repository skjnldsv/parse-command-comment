const parseCommand = function(command: string): Array<string> {
  if (!command.startsWith('/')) {
    throw new Error('Command should start with a leading slash');
  }

  // Remove leading slash and split to get the first line only
  command = command.substr(1).split(/[\n\r]/)[0];

  const badChars = [...command.matchAll(/[^A-Za-z0-9\-_/ ]/g)].flat();

  if (badChars.length > 0) {
    throw new Error(
      'Invalid character found in the command or in the command argument(s): ' +
        badChars.join(', ')
    );
  }
  // split command and arguments
  return command.split(' ');
};

export default parseCommand;
