var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
// var crypto = require('crypto');
// var session = require('express-session');

var app = express();
app.use(bodyParser.json());
// app.use(session({
//     resave: true,
//     secret: 'jsonlovereact',
//     saveUninitialized: true
// }))

//  allow custom header and CORS ie不兼容 发请求体的都有options请求
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    }else {
        next();
    }
});
app.get('/about', function (req, res) {
    res.send('about')
  })
// 使用axios进行接口转发
app.get('/apis/:interfaceType/:inParams', function(req, res){
    if(req.params.interfaceType === 'topTen') {
        axios.get(`http://api.dataoke.com/index.php?r=Port/index${req.params.inParams}`).then( r => {
            res.json(r.data)
        })
    }
})

app.listen(3000, function() {
    console.log('server is running at 3000')
});