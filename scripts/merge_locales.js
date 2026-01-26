const jsonMerger = require("json-merger");
const fs = require('fs');

const files = [
  "common.json",
  "home.json",
  "guides.json",
  "portfolio.json",
  "prompt_categories.json",
  "prompt_pack.json",
]
const result = jsonMerger.mergeFiles(files.map(file => `./src/l18n/locales/source/${file}`));

let json = JSON.stringify(result);

fs.writeFileSync('./src/l18n/locales/en.json', json);


return result