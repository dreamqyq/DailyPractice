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
    html: args.includes("html"),
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
  consoleSuccess(`${fileName} create success!`);
};

const writeHTMLFile = async (nextIndex, commandArgs) => {
  const styleLink = `\n  <link rel="stylesheet" href="../style/${nextIndex}.css">`;
  const jsScript = `\n  <script src="../js/${nextIndex}.js"></script>`
  const jsxScript = `\n  <script type="text/babel" src="../js/${nextIndex}.jsx"></script>`
  const HTMLTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${commandArgs.name}</title>${commandArgs.css ? styleLink : ""}
</head>
<body>${commandArgs.jsx ? jsxScript : ""}${commandArgs.js ? jsScript : ""}
</body>
</html>
  `;
  const filePath = path.join(__dirname, `../pages/${nextIndex}.html`);
  await db.write(filePath, HTMLTemplate);
  consoleSuccess(`${nextIndex}.html create success!`);
};

const main = async () => {
  // node cli css js html jsx --name "Practice Name 1"
  const args = getCommandArgv();
  if (args) {
    const readmeContent = await db.read(path.join(__dirname, "../README.md"));
    const nextIndex = await getNextPracticeIndex(readmeContent);
    await writeInREADME(readmeContent, nextIndex, args.name);
    args.js && await writeWhiteFile("js", nextIndex);
    args.jsx && await writeWhiteFile("jsx", nextIndex);
    args.css && await writeWhiteFile("css", nextIndex);
    args.html && (await writeHTMLFile(nextIndex, args));
  }
};

main();
