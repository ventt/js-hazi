const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

const moment = require('moment');
app.locals.moment = require('moment');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(
    session({
        secret: 'secret',
        loggedIn: false
    })
);

app.use(express.static(__dirname + '/public'));
require('./routes/index')(app);


//TODO: ejs-re
app.use((err,res,next)=>{
    res.end('Problem...');
    console.log(err);
});




app.listen(3000, function (){
    console.log('Hello :3000');
});
