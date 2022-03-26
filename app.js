
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use(express.static('views'))
require('./routes/index')(app);

app.listen(3000, function (){
    console.log('Hello :3000');
});
