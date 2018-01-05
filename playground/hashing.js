const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$KPZT8R0nppjfi83YD1OcNuktE45pGfYNymAWdS55fX329LKPTyv0K';
var hashedTwo = '$2a$10$lFIZXtNtsP1PTaWk7OGMn.ahK22WBbJyHuSwDA5UEroUyUyzl5fkW';
var hashedThree = '$2a$10$O04q9GlB9dxRcjgXDFcVkurIBpyDvGHmlWlznP8xOZgGMOVJYMLjK';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

bcrypt.compare(password, hashedTwo, (err, res) => {
  console.log(res);
});

bcrypt.compare(password, hashedThree, (err, res) => {
  console.log(res);
});

// jwt.sign
// jwt.verify

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
//  var data = {
//    id: 10
//  };
//
//  var token = jwt.sign(data, '123abc');
//  console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);
//
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }
