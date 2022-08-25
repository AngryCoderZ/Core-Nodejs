
const path= require("path")

// console.log(__dirname)


const file = "/home/angryCoderZ/Desktop/angryCoderZ/pathmodule.exe"

// console.log(path.dirname(file))
// console.log(path.extname(file))
// console.log(path.basename(file))

console.log(path.parse(file))