connect-laravel
===============
Connect middleware for interoperation with Laravel.  This library makes use of
the `node-laravel` package; it expects a Laravel context object from that
module.

Example
-------
```js
const http = require("http");
const express = require("express");
const Laravel = require("node-laravel");
const session = require("connect-laravel").session;
const httpServer = http.createServer();
const appKey = "..."        // Laravel application encryption key

var laravel;

// create Laravel context that can load data from storage, decrypt, and decode
laravel = Laravel(appKey, id => new Promise((resolve, reject) => {
    // load session data from storage and resolve...
}));

// setup middleware
express.use(session(laravel));

// middleware adds .sesssion to request object
express.get("/", (req, res) => {
    console.log(req.session);
});
```

API
---

### session(Laravel) => function
Create Connect middleware using Laravel context compatible with those created
by the `node-laravel` module.
