import * as core from '@actions/core';
import { readFileSync, existsSync } from 'fs';
import parseCommand from './parseCommand';

async function run(): Promise<void> {
  try {
    let payload;

    if (
      process.env.GITHUB_EVENT_PATH &&
      existsSync(process.env.GITHUB_EVENT_PATH)
    ) {
      // Parse the payload data
      payload = JSON.parse(
        readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' })
      );
    } else {
      throw new Error('Unable to fetch event payload data');
    }

    // If we have a valid comment
    if (payload.comment && typeof payload.comment.body === 'string') {
      const args = parseCommand(payload.comment.body);
      args.forEach((arg, index) => {
        core.setOutput(`arg${index}`, arg);
      });
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
