const path = require("path");
const fs = require("fs");

module.exports = {
  read(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (error, data) => {
        if (error) return reject(error);
        resolve(data);
      });
    });
  },
  write(path, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, content, "utf-8", async (error) => {
        if (error) reject(new Error(`write ${path} error: \n${error}`));
        resolve();
      });
    });
  }
};
