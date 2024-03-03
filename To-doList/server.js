const express = require('express');
const { readFile } = require('fs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('home')

});

app.listen(process.env.PORT || 3000, () => console.log('App avalible on http://localhost:3000'));