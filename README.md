# uid2

strong uid.  Pass in a `length` and it returns a `string`.

[![NPM version](https://badge.fury.io/js/uid2.png)](http://badge.fury.io/js/uid2)

## Installation

    npm install uid2

## Usage

```javascript
var uid = require('uid2');

//synchronous usage
var id = uid(length);

//asynchronous usage
uid(length, function (err, id) {
  if (err) throw err;
});
```

## License

  MIT