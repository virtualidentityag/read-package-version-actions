import * as core from '@actions/core';
import { getPackageProperty } from './getPackageProperty';

async function run() {
  try {
    const path = core.getInput('path');

    core.debug(`Load package.json at ${path}`);

    const result = getPackageProperty(path);

    core.debug(`set output: propertyValue: ${result}`);
    core.setOutput('propertyValue', result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
