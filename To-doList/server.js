const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.render('login')
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(process.env.PORT || 3000, () => console.log('App avalible on http://localhost:3000'));