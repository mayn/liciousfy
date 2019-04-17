#! /usr/bin/env node

switch(process.argv.length) {
    case 2:
        console.log("USAGE: liciousfy 'name to liciousfy'");
        break;
    case 3:
        console.log(process.argv[2] + 'licious')
        break;
    default:
        console.log(process.argv)
        console.log("your input was too delicious, one at a time")
}