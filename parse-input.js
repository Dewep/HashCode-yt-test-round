const fs = require('fs')
const content = fs.readFileSync(process.argv[2]).toString().split('\n')

console.log(content)
