const fs = require('fs');
const dir = fs.readdir(__dirname, (error, dir)=>{
    if (error) return console.log(error);
    console.log(dir);
});