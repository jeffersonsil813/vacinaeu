const crypto = require("crypto");

const encrypt = (password) => {
  return crypto.createHash("sha512").update(password).digest("hex");
};

module.exports = { encrypt };
