const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

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






app.listen(3000, function (){
    console.log('Hello :3000');
});
