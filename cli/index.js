const path = require("path");
const process = require("process");
const db = require("./db");
const { consoleSuccess, consoleFail } = require("./console");

const getCommandArgv = () => {
  const args = process.argv.slice(2);
  const result = {
    js: args.includes("js"),
    css: args.includes("css"),
    jsx: args.includes("jsx"),
    name: ""
  };
  const nameIndex = args.indexOf("--name");
  if (nameIndex > -1 && args[nameIndex + 1]) {
    result.name = args[nameIndex + 1];
  } else {
    consoleFail("please input practice name");
    return false;
  }
  return result;
};

const getNextPracticeIndex = async (readmeContent) => {
  const list = readmeContent.split("- ");
  const currentIndex = parseInt(list[list.length - 1].slice(0, 3));
  const nextIndex = currentIndex + 1;
  return nextIndex > 100 ? "" + nextIndex : "0" + nextIndex;
};

const writeInREADME = async (readmeContent, nextIndex, name) => {
  const itemName = `- ${nextIndex}: ${name}`;
  await db.write(
    path.join(__dirname, "../README.md"),
    readmeContent + itemName + "\n"
  );
  consoleSuccess("README.md write success!");
};

// write css, js, jsx file
const writeWhiteFile = async (type, nextIndex) => {
  const pathHash = {
    js: "js",
    jsx: "js",
    css: "style"
  };
  const fileName = `${nextIndex}.${type}`;
  const filePath = path.join(__dirname, `../${pathHash[type]}/${fileName}`);
  await db.write(filePath, "");
  consoleSuccess(`${fileName} write success!`);
};

const main = async () => {
  // node cli css js html jsx --name "Practice Name 1"
  /**
   * 1. get command arguments ✅
   * 2. get Next index ✅
   * 2. write README.md ✅
   * 3. write css ✅
   * 4. write js ✅
   * 5. write jsx ✅
   * 6. write html（title）, import js、css、jsx
   * 7. write index.html,add new practice file
   */
  const args = getCommandArgv();
  if (args) {
    const readmeContent = await db.read(path.join(__dirname, "../README.md"));
    const nextIndex = await getNextPracticeIndex(readmeContent);
    await writeInREADME(readmeContent, nextIndex, args.name);
    args.js && writeWhiteFile("js", nextIndex);
    args.jsx && writeWhiteFile("jsx", nextIndex);
    args.css && writeWhiteFile("css", nextIndex);
  }
};

main();
