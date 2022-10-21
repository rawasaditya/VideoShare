const checkrequired = (params) => {
  let validationmessage = {};
  for (const property in params) {
    if (!params[property]) {
      validationmessage[property] = "Is required field";
    }
  }
  return validationmessage;
};

module.exports = { checkrequired };
