const path = require('path');
const { consoleSuccess, consoleFail } = require('./console');
const process = require('process');
const exec = require('child_process').exec;

const handleCompile = fileName => {
  const tsFilePath = path.join(__dirname, `../ts/${fileName}.ts`);
  const jsFilePath = path.join(__dirname, `../js/${fileName}.js`);
  exec(`tsc ${tsFilePath} --outFile ${jsFilePath}`, (error, stdout, stderr) => {
    if (error) throw new Error(`compile fail:\n${error}`);
    consoleSuccess(`🎉 ${fileName}.ts compile to ${fileName}.js successful!`)
  });
};

const main = () => {
  const fileName = process.argv[2];
  handleCompile(fileName);
};

main();
