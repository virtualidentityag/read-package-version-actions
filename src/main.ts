import * as core from '@actions/core';
import { getPackageProperty } from './getPackageProperty';

async function run() {
  try {
    const path = core.getInput('path');
    const propertyKey = core.getInput('propertyKey');

    core.debug(`Load package.json at ${path}`);

    const result = getPackageProperty(path, propertyKey);

    core.debug(`set output: propertyValue: ${result}`);
    core.setOutput('propertyValue', result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
