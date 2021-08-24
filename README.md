# uid2

Generate unique ids of any length

## Installation

    npm install uid2

## Examples

Without a callback it is synchronous:

```js
uid(10)
// => "hbswt489ts"
```

With a callback it is asynchronous:

```js
uid(10, function (err, res) {
  if (err) throw err;
  // res => "hbswt489ts"
});
```

## License

MIT
