var crypto = require('crypto-js');

var value = {
    name: 'Renjith',
    age: '24'
};

var secretkey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(value),secretkey);

var decryptedMessage = crypto.AES.decrypt(encryptedMessage,secretkey);
var decmess = JSON.parse(decryptedMessage.toString(crypto.enc.Utf8));


console.log(decmess.age);