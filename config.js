const COS = require("cos-nodejs-sdk-v5");

const cos = new COS({
  SecretId: process.env.COS_SECRET_ID,
  SecretKey: process.env.COS_SECRET_KEY,
});

module.exports = cos;
