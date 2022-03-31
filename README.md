<p align="center">
  <img width="64" src="https://avatars2.githubusercontent.com/u/22204821?s=200&v=4" alt="Rehive Logo">
  <h1 align="center">Docs Portal</h1>
  <p align="center">General documentation for the Rehive ecosystem</p>
</p>

## Usage

### Download/Clone

The docs portal uses a submodule for its theme. Therefore when cloning the repository ensure you do so recursively:

```sh
git clone --recurse-submodules git@github.com:rehive/docs-portal.git
```

When pulling new changes from `master` make sure you also run the following to get the latest submodule updates.

```sh
git submodule update
```

### Development

```sh
hugo serve
```
