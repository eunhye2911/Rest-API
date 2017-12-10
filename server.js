const express = require('express'); 
const app = express();
//modul 불러오는 방법 import 써도 됨

app.get('/', (req,res)=>{
    res.send('HelloWorld');
    
})

app.listen(7777);

// git에 commit 하지 않을 파일을 제외하는 파일이 있음
// .getignore