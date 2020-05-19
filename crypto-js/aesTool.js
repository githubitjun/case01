const CryptoJS = require('./aes.js'); //引用AES源码js
const key = CryptoJS.enc.Utf8.parse('sdfdstwqgdseftes'); //十六位十六进制数作为秘钥
const iv = CryptoJS.enc.Utf8.parse('1234567890qwerty');//十六位十六进制数作为秘钥偏移量

// 解密
function AesDecrypt(word) {
  let base64 = CryptoJS.enc.Base64.parse(word)
  let srcs = CryptoJS.enc.Base64.stringify(base64)
  var decrypted = CryptoJS.AES.decrypt(srcs, key, { iv: iv, padding: CryptoJS.pad.ZeroPadding })
  decrypted = decrypted.toString(CryptoJS.enc.Utf8)
  return decrypted
}
/**
 * aes 加密方法解密方法带有偏移量  加密
 */
function AesEncrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

//暴露接口
module.exports = {
  AesEncrypt,
  AesDecrypt
}
