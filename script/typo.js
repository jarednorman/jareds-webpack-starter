const fs = require("fs")
const typography = require("../typography.config.js")

fs.writeFileSync("./src/typography.css", typography.toString())
