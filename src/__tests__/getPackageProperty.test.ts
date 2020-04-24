import fs from 'fs';

import { findPackageJson, getPackageProperty } from '../getPackageProperty';

const fixturePath = './src/__tests__/fixture';
const fixture = `./src/__tests__/fixture/package.json`;

describe('getPackageProperty', () => {
  describe('findPackageJson', () => {
    test('find package.json', () => {
      const result = findPackageJson(fixturePath);

      expect(result).toBe(fs.readFileSync(fixture).toString());
    });
  });

  describe('getPackageProperty', () => {
    test('get version text within package.json', () => {
      const result = getPackageProperty(fixturePath);

      expect(result).toBe('0.0.0');
    });
  });

  describe('getPackageProperty with version property', () => {
    test('get version text within package.json', () => {
      const result = getPackageProperty(fixturePath, 'version');

      expect(result).toBe('0.0.0');
    });
  });

  describe('getPackageLinkedBiotopeVersion with linkedBiotopeVersion property', () => {
    test('get version text within package.json', () => {
      const result = getPackageProperty(fixturePath, 'otherProperty');

      expect(result).toBe('1.0.0');
    });
  });
});
