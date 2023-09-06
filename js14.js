const fs = require('fs');
let content = "나도알아 ES6";
fs.writeFile('./kim2.txt', content, (err) => {
    fs.readFile('./kim2.txt','utf8', (err,data) => {
        console.log(data);
    })
})
fs.writeFileSync('./kim3.txt', content);
var data = fs.readFileSync('./kim3.txt', 'utf8');
console.log(data);

//내용 추가
fs.readFile('./kim2.txt','utf8',(err,data) => {
    let con = data+" 내용추가";
    fs.writeFile('./kim2.txt', con, (err) => {
        console.log(con);
    });
});

