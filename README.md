# Extract comment command arguments

Extract the command arguments from the workflow comment event body
## Example workflow

```yml
name: Get command arguments

on:
  issue_comment:
    types: [created]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Parse command
        uses: skjnldsv/parse-command-comment@v2
        id: command
        # steps.command.outputs.arg1
        # steps.command.outputs.arg2
        # steps.command.outputs.arg3
        # steps.command.outputs.arg...
```
