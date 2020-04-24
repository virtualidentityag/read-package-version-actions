import fs from 'fs';
import { join } from 'path';

/**
 * Find package.json with path.
 * @param path
 */
export const findPackageJson = (path: string): string => {
  return fs.readFileSync(join(path, 'package.json')).toString();
};

/**
 * Get version field within package.json
 * @param path
 * @param propertyKey
 */
export const getPackageProperty = (
  path: string,
  propertyKey = 'version'
): string => {
  const packageJson = findPackageJson(path);

  return JSON.parse(packageJson)[propertyKey];
};
