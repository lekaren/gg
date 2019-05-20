const express = require('express');
const rq = require('request-promise');
var serveStatic = require('serve-static');      //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할
var bodyParser_post = require('body-parser');
const app = express();

app.use(bodyParser_post.urlencoded({ extended: false }));            // post 방식 세팅
app.use(bodyParser_post.json());

app.use(serveStatic('view'));

app.get('/', function(req,res){
    res.redirect('/login.html');    
});

app.post('/process/Login', function(req,res){
    res.send("id : " + req.body.id + "<br>" + "pw : " + req.body.passwords);
});

app.listen(3000, function () {
    console.log('Hi!!');
});
