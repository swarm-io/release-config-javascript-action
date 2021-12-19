# release-config-javascript-actions
A semantic-release sharable configuration for releasing javascript github actions. This release config updates the version in package.json but does not push to npm
## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/exec`](https://github.com/semantic-release/exec)
- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`@semantic-release/github`](https://github.com/semantic-release/github)

## Install

```bash
$ npm install --save-dev semantic-release @swarm-io/release-config-javascript-actions
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@swarm-io/release-config-javascript-actions"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.

