const createError = require("../error");

const checkrequired = (params,next) => {
  let validationmessage = {};
  for (const property in params) {
    if (!params[property]) {
      validationmessage[property] = "Is required field";
    }
  }
  
  if (Object.keys(validationmessage).length) {
    next(createError(400, validationmessage));
    return;
  }

};

module.exports = { checkrequired };
