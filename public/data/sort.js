const fs = require("fs");

var arr = [];
for (let i = 0; i <= 12; i++) {
  let obj = {
    Id: i.toString(),
    Words: [...Array(12).keys()].map((x) => x + i * 13),
    FinalRound: i * 13 + 12,
  };
  arr.push(obj);
}

fs.writeFileSync("cards2.json", JSON.stringify(arr));
