const consoleSuccess = (message) => {
  console.log("\x1b[32m", message);
};
const consoleFail = (message) => {
  console.log("\x1b[31m", message);
};
module.exports = {
  consoleSuccess,
  consoleFail
};
