# eslint-newline-imports

This ESLint rule ensures that each property in an import statement is placed on a new line.

## Features

- Forces a consistent style for multiline imports
- Enhances readability of codebase
- Ideal for large projects where maintaining a consistent coding style is critical

## Installation

First, you'll need to install [ESLint](http://eslint.org):

```shell
$ npm i eslint --save-dev
```

Next, install `@absqueued/eslint-newline-imports`:

```shell
$ npm install @absqueued/eslint-newline-imports --save-dev
```

Note: If you installed ESLint globally (using the -g flag) then you must also install `@absqueued/eslint-newline-imports` globally.

## Usage

Add `@absqueued/eslint-newline-imports` to the plugins section of your .eslintrc configuration file. You can omit the eslint-plugin- prefix:

```shell
{
    "plugins": [
        "@absqueued/eslint-newline-imports"
    ]
}
```

Then configure the rules you want to use under the rules section.

```
{
  "rules": {
    "@absqueued/eslint-newline-imports": ["error", {"maxPropertiesOnSingleLine": 2}]
  }
}

```

## Supported Rules

`newline-import`: Enforces a new line for each property in an import statement.

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check [issues page](https://github.com/absqueued/eslint-newline-imports/issues) if you want to contribute.

### Tests

To run the test suite, first install the dependencies, then run npm test:

```shell
$ npm install
$ npm test
```

## License

[MIT](/LICENSE) © Shekhar K. Sharma

Give me a ⭐️ if this project helped you!

Follow me on [Twitter](https://twitter.com/absqueued).
