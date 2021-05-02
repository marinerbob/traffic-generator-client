const path = require("path");
const { stdout } = require("process");
stdout.write(path.resolve(__dirname, "..", "public"));