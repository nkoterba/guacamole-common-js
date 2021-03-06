[![npm version](https://img.shields.io/npm/v/padarom-guacamole-common-js.svg)](https://www.npmjs.com/package/padarom-guacamole-common-js) [![downloads](https://img.shields.io/npm/dt/padarom-guacamole-common-js.svg)](https://www.npmjs.com/package/padarom-guacamole-common-js)

# What is guacamole-common-js?

guacamole-common-js is the core JavaScript library used by the Guacamole web
application.

guacamole-common-js provides an efficient HTTP tunnel for transporting
protocol data between JavaScript and the web application, as well as an
implementation of a Guacamole protocol client and abstract synchronized
drawing layers. 

## What is this fork for?

This is a fork of [glyptodon/guacamole-client](https://github.com/glyptodon/guacamole-client). All I did was to strip away the other
parts of the library (namely `guacamole-ext`, `guacamole-common`, `extension` and `guacamole`), so that all that remains is the JavaScript
library __guacamole-common-js__. In addition, I have converted it to a NPM repository so that it can be installed in your applications:

```
npm install --save padarom-guacamole-common-js
```

## How to use this fork

This fork includes a [UMD](https://github.com/umdjs/umd) wrapper to export the `Guacamole` object
 in CommonJS format, AMD format, or as a 'global' object (when used in browser).  For CommonJS, 
 simply require this library:
 
```
var Guacamole = require('padarom-guacamole-common-js');
// All modules are now exposed:
var tunnel = new Guacamole.HTTPTunnel(..., ...);
```

## Documentation
Distribution-specific packages are available from the files section of the main
project page:
 
    http://sourceforge.net/projects/guacamole/files/

Distribution-specific documentation is provided on the Guacamole wiki:

    http://guac-dev.org/

# Reporting problems

_I am not a maintainer of the original guacamole repository. All I did was to create this fork._

Please report any bugs encountered by opening a new ticket at the Trac system hosted at:
    
    http://guac-dev.org/trac/

