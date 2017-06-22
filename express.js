var express = require('express')
var app = express()
 
app.get('/', 
    function (req, res, next) {
        req.user = { userName: 'Ivan' }
        next();
    },
    function (req, res, next) {
    if (!req.user){
        res.end('There is no user')
        }
        next();
    },
    function (req, res, next) {
        res.end(`Hello, ${req.user.userName}`);
    }
)
  
app.get('/home', function (req, res) {
  res.send('Hello Motherfucker!')
})
 
app.listen(3000)