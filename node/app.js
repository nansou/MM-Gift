var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var TopClient = require('node-taobao-topclient').default;
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
    }else if(req.params.interfaceType === 'convert') {
        const client = new TopClient({
            'appkey': '25361075',
            'appsecret': 'd6bbebc8a6864680a0bb776c8cce0be3',
            'REST_URL': 'http://gw.api.taobao.com/router/rest'
        });

        client.execute('taobao.tbk.item.convert', {
            'fields':'num_iid,click_url',
            'num_iids':'540916554177',
            'adzone_id':'70957850130',
            'platform':'',
            'unid':'',
            'dx':''
        }, function(error, response) {
            if (!error){
                console.log(response);
            }
            else {
                console.log(error);
            }
             
        },{code: '0000'},'get')
    }
})

app.listen(3000, function() {
    console.log('server is running at 3000')
});