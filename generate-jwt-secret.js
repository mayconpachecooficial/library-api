const cryptoRandomString = require('crypto-random-string');

const jwtSecret = cryptoRandomString({
  length: 64,
  type: 'base64'
});

console.log(`JWT_SECRET=${jwtSecret}`);
