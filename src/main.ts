import * as core from "@actions/core";
import { readFileSync, existsSync } from "fs";

async function run(): Promise<void> {
  try {
    let payload;

    if (
      process.env.GITHUB_EVENT_PATH &&
      existsSync(process.env.GITHUB_EVENT_PATH)
    ) {
      payload = JSON.parse(
        readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: "utf8" })
      );
    } else {
      throw new Error("Unable to fetch event payload");
    }
    console.log(payload);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
