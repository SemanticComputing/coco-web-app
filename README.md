[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# User interface for CoCo portal

A framework for building user interfaces for semantic portals. 

The following research prototype portals use this repository as a base:

1. [NameSampo](https://github.com/SemanticComputing/nimisampo.fi)
2. [Mapping Manuscript Migrations](https://github.com/mapping-manuscript-migrations/mmm-web-app)
3. [WarVictimSampo 1914&ndash;1922](https://github.com/SemanticComputing/sotasurmat-web-app)
4. [LawSampo](https://github.com/SemanticComputing/lawsampo-web-app)
5. [AcademySampo](https://github.com/SemanticComputing/academysampo-web-app)
6. [FindSampo](https://github.com/SemanticComputing/findsampo-web-app) 
7. [HistorySampo](https://github.com/SemanticComputing/historysampo-web-app) 
8. [LetterSampo](https://github.com/SemanticComputing/lettersampo-web-app)
9. [Hellerau](https://github.com/SemanticComputing/hellerau-web-app)
10. [ParliamentSampo](https://github.com/SemanticComputing/parliamentsampo-web-app)
11. [WarMemoirSampo](https://github.com/SemanticComputing/veterans-web-app)
12. [WarSampo analyzer](https://github.com/SemanticComputing/warsa-analyzer-web-app)
13. [ArtSampo](https://github.com/SemanticComputing/artsampo-web-app)
14. [Constellations of Correspondence](https://github.com/SemanticComputing/coco-web-app)
15. [BookSampo](https://github.com/SemanticComputing/booksampo-web-app)

An example deployment generated from this repository is published at [sampo-ui.demo.seco.cs.aalto.fi](https://sampo-ui.demo.seco.cs.aalto.fi). It combines perspectives from the Mapping Manuscript Migrations and NameSampo portals, and can be used for testing and as a starting point for developing new portals. 

The Sampo-UI framework is being developed by the [Semantic Computing Research Group (SeCo)](https://seco.cs.aalto.fi) 
at the Aalto University, Finland. See the [research page](https://seco.cs.aalto.fi/tools/sampo-ui) for 
more information plus instructions and tutorials.

## Design philosophy

Sampo-UI offers a comprehensive "starting base" of a full stack JavaScript web application. 
Therefore it is not possible to include Sampo-UI as separate component into an existing 
application. The 
most convenient way to build a new user interface using Sampo-UI is to read the documentation 
provided below, fork this repository, and start developing from there.

## Requirements

* [Node.js® &ndash; a JavaScript runtime built on Chrome's V8 JavaScript engine.](https://nodejs.org/en/) (version 16.13.0)

* [Nodemon &ndash; monitor for any changes in your source and automatically restart your server](https://nodemon.io/)

Note for Linux users: if your home directory is mounted from a network drive, using the [Node Version Manager](https://github.com/nvm-sh/nvm) for installing Node.js highly recommended. 

## Installation

### Local development

Install the dependencies specified in `package.json` (this command needs to be run only once,
  as long as you don't modify the dependencies):

`npm install`

Run client and server concurrently:

`npm run dev`

## Deploy with Docker

These example commands can be used to deploy the server at http://localhost:3006/ in **production** mode. Production mode means in this case that the server listens for API requests at URLs beginning with http://localhost:3006/api/v1/... and additionally serves the client (React app) at http://localhost:3006/. The API docs can be found at http://localhost:3006/api-docs/.

Note that in **development** mode Webpack is used for serving the client, and the server is used only for handling API requests. 

The build argument API_URL must be provided.

### Build
 `docker build --build-arg API_URL=http://localhost:3006/api/v1 -t sampo-web-app-image .`

### Run
 `docker run -d -p 3006:3001 --name sampo-web-app sampo-web-app-image`

### Run with password protected endpoint
 `docker run -d -p 3006:3001 -e SPARQL_ENDPOINT_BASIC_AUTH=your_password --name sampo-web-app sampo-web-app-image`

### Upgrade
```
docker build --build-arg API_URL=http://localhost:3006/api/v1 -t sampo-web-app-image .
docker stop sampo-web-app
docker rm sampo-web-app
docker run -d -p 3006:3001 --name sampo-web-app sampo-web-app-image
```

## Developer guide

 ### Coding style

The [JavaScript style guide, linter, and formatter](https://standardjs.com) module (named "standard" in package.json) is installed by default as development dependency. Do not install or create any additional style definitions or configurations. Instead, install an appropriate [plugin](https://standardjs.com/index.html#are-there-text-editor-plugins) for your text editor. If there are no plugins  available for your favorite editor, it is highly recommended to switch into a supported editor. 

## Documentation

### Client

Sampo-UI's React components are documented [here](https://semanticcomputing.github.io/sampo-ui) using Storybook.

Here is a list of the main JavaScript libraries on which the Sampo-UI client is built on:

* [React &ndash; A JavaScript library for building user interfaces](https://reactjs.org/)
* [Material-UI &ndash; React components for faster and easier web development](https://material-ui.com/)
* [Redux &ndash; A Predictable State Container for JS Apps](https://redux.js.org/)
* [redux-observable &ndash; RxJS-based middleware for Redux](https://redux-observable.js.org/)
* [Reselect &ndash; Selector library for Redux](https://github.com/reduxjs/reselect)
* [React Router &ndash; Declarative routing for React](https://reacttraining.com/react-router/web/guides/quick-start)
* [react-intl-universal &ndash; React internationalization package developed by Alibaba Group](https://github.com/alibaba/react-intl-universal)
* [deck.gl &ndash; Large-scale WebGL-powered Data Visualization](https://deck.gl) 
* [react-map-gl &ndash; React friendly API wrapper around MapboxGL JS](https://github.com/visgl/react-map-gl) 
* [Leaflet &ndash; a JavaScript library for interactive maps](https://leafletjs.com/) 
* [Cytoscape &ndash; an open source software platform for visualizing complex networks](https://cytoscape.org/)
* [ApexCharts.js &ndash; Open Source JavaScript Charts for your website](https://apexcharts.com/)
* [React Sortable Tree &ndash; A React component for representation of hierarchical data](https://github.com/frontend-collective/react-sortable-tree)
* [Moment.js &ndash; Parse, validate, manipulate, and display dates and times in JavaScript](https://momentjs.com/)

### Backend

The API provided by Sampo-UI's backend includes routes for the following search paradigms: faceted search, 
full text search, and federated full text or spatial search. The API is described using the 
[OpenAPI Specification](https://swagger.io/specification). The same specification is used for both 
documenting the API, and validating the API requests and responses. 

An API documentation with example configuration can been seen [here](https://sampo-ui.demo.seco.cs.aalto.fi/api-docs/).

Sampo-UI's backend is based on the following JavaScript libraries:

* [Express &ndash; Fast, unopinionated, minimalist web framework for Node.js](https://expressjs.com/)
* [axios &ndash; Promise based HTTP client for the browser and Node.js](https://github.com/axios/axios)
* [Lodash &ndash; A modern JavaScript utility library delivering modularity, performance & extras](https://lodash.com/)

