/**
 * Module dependencies
 */

var crypto = require('crypto');

/**
 * 62 characters in the ascii range that can be used in URLs without special
 * encoding.
 */
var UIDCHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Make a Buffer into a string ready for use in URLs
 *
 * @param {String}
 * @param {String} characterSet - A string of characters from which to choose random
 *  characters.
 * @returns {String}
 * @api private
 */
function tostr(bytes, characterSet) {
  var r, i;

  r = [];
  for (i = 0; i < bytes.length; i++) {
    r.push(characterSet[bytes[i] % characterSet.length]);
  }

  return r.join('');
}

/**
 * Generate an Unique Id
 *
 * @param {Number} length  The number of chars of the uid
 * @param {String} characterSet (optional) - A string of characters from which to choose random
  *  characters.
 * @param {Number} cb (optional)  Callback for async uid generation
 * @api public
 */

function uid(length, characterSet, cb) {
  if (!characterSet) {
    characterSet = UIDCHARS;
  }

  if (typeof characterSet === 'function') {
    cb = characterSet
    characterSet = UIDCHARS;
  }

  if (typeof cb === 'undefined') {
    return tostr(crypto.pseudoRandomBytes(length), characterSet);
  } else {
    crypto.pseudoRandomBytes(length, function(err, bytes) {
       if (err) return cb(err);
       cb(null, tostr(bytes, characterSet));
    })
  }
}


/**
 * Exports
 */
module.exports = uid;

