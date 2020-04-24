# Read package version actions

Read your version in `package.json`

## Example workflow

`package.json`
```json

{
  "name": "your-package",
  "version": "1.0.0",
  "otherProperty": "any",
}
```

`.github/workflow/test.yml`
```yml
name: Get version from package.json

on: push

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read package.json
        uses: tyankatsu0105/read-package-version-actions@v1
        id: package-version

      - name: Show version number
        run: echo "Version is ${{ steps.package-version.outputs.propertyValue }}"
        # Version is 1.0.0
```

## Inputs

### path

Path of `package.json`, `./` by default.

`path/to/package.json`
```json

{
  "name": "your-package",
  "version": "0.5.0",
}
```

```yml
name: Get version from package.json

on: push

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read package.json
        uses: tyankatsu0105/read-package-version-actions@v1
        with: 
          path: "./path/to/package.json"
        id: package-version

      - name: Show version number
        run: echo "Version is ${{ steps.package-version.outputs.propertyValue }}"
        # Version is 0.5.0
```

### propertyKey

Name of the property to read from in `package.json`, `version` by default.

`path/to/package.json`
```json

{
  "name": "your-package",
  "version": "0.5.0",
  "otherProperty": "any string value",
}
```

```yml
name: Get otherProperty from package.json

on: push

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read package.json
        uses: tyankatsu0105/read-package-version-actions@v1
        with: 
          path: "./path/to/package.json"
          propertyKey: "otherProperty"
        id: package-otherProperty

      - name: Show otherProperty
        run: echo "otherProperty is ${{ steps.package-otherProperty.outputs.propertyValue }}"
        # otherProperty is any string value
```

# License

MIT