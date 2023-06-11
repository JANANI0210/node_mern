const pathModule = require('path')

console.log(pathModule.sep)

const filePath = pathModule.join('/content/', 'subfolder', 'new.txt')
console.log(filePath)

const baseName = pathModule.basename(filePath)
console.log(baseName)

const absolute = pathModule.resolve(__dirname, 'content', 'subfolder', 'new.txt')
console.log(absolute)