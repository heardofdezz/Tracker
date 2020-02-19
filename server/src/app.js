console.log('Running Server');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

 app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


// app.get('/register', (req, res, next) => {
// });

app.post('/register', (req, res, next) => {
  
    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body);
    console.log(email, password);
    res.send({
        message: `Hello ${req.body.email}Account has beeen registered`
    });
});

app.listen(process.env.Port || 8081);