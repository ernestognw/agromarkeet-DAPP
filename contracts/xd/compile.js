const path = require('path');
const fs = require('fs');
const solc = require('solc');
const agroMarkeetPath = path.resolve(__dirname, 'contracts', 'agromarkeet.sol');
const source = fs.readFileSync(agroMarkeetPath, 'utf8');
module.exports = solc.compile(source, 1).contracts[':AgroMarkeet'];