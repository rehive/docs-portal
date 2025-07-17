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

When pulling new changes from `master` make sure you also run the following afterwards to get the latest submodule updates.

```sh
git submodule update
```

If a submodule has been updated at its origin, then you will need to merge these updates into the repository using:

```sh
git submodule update --remote --merge
```

And then commit/push the new submodule.

### Development

Ensure you have Hugo version `0.148.1 (extended)` and Python 3 installed.

#### Initial Setup

1. Install Python dependencies for search functionality:
```sh
python3 -m venv .venv
source .venv/bin/activate
pip install PyYAML
```

2. Generate search index:
```sh
python3 generate-search-index.py
```

3. Start development server:
```sh
hugo serve
```

#### Quick Development

Use the provided build script for convenience:
```sh
./build.sh  # Generates search index and builds site
```

### Search Functionality

The docs portal includes a full-text search feature that indexes all markdown content:

- **Desktop**: Search box in the main navigation bar
- **Mobile**: Search box in the sidebar menu
- **Keyboard shortcut**: `Ctrl+K` (or `Cmd+K` on Mac) to focus search
- **Features**: Real-time search, highlighted results, section organization

The search index is automatically generated from all markdown files in the `/content/` directory.

### Docker Build

The Docker build process automatically generates the search index and builds the Hugo site:

```sh
# Build the Hugo site with search index
docker build -f etc/docker/build.Dockerfile -t docs-portal-build .

# Extract the built site
docker run -v $(pwd)/public:/app/public:rw docs-portal-build

# Build the nginx container with the site
docker build -f etc/docker/Dockerfile -t docs-portal .
```

The build process includes:
1. Installing Python and PyYAML dependencies
2. Generating the search index from markdown content
3. Building the Hugo site with search functionality
4. Serving with nginx

For cloud deployments, the existing Cloud Build configuration (`etc/docker/cloudbuild.yaml`) automatically handles the complete build process.
