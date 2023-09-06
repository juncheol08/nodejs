const fs = require("fs");

fs.readFile('./kim.txt','utf8', function(err,data){
    console.log(data);
})