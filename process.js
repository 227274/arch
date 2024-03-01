const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", (line) => {
  for (let i of line.split("\n")) {
    let uri = encodeURI(i);
    uri = uri.replaceAll(encodeURI("["), "[");
    uri = uri.replaceAll(encodeURI("]"), "]");
    uri = uri.replaceAll(encodeURI("{"), "{");
    uri = uri.replaceAll(encodeURI("}"), "}");
    process.stdout.write(uri + "\n");
  }
});
