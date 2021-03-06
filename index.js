'use strict';

var crypto = require('crypto');
var password = 'SoylentGreenIsPeople';

function encrypt(phrase){
  var cipher = crypto.createCipher('aes192', password);
  var encrypted = cipher.update(phrase, 'utf8', 'hex');

  encrypted += cipher.final('hex');

  return encrypted;
}

function decrypt(phrase){
  var decipher = crypto.createDecipher('aes192', password);
  var decrypted = decipher.update(phrase, 'hex', 'utf8');

  decrypted += decipher.final('utf-8');
  return decrypted;
}

module.exports.encrypt = encrypt;

module.exports.decrypt = decrypt;