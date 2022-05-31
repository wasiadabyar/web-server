const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const publicPath = path.join(__dirname, './public');
const viewPath = path.join(__dirname, './tamplates/views');
const partialsPath = path.join(__dirname, './tamplates/partials');

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath))
app.use(express.static(viewPath))

app.get('/', (req, res) => {
    res.send('<h1>this is web server</h1>');
});

app.get('/home', (req, res) => {
    res.render('index')
});
app.get('/post', (req, res) => {
    res.render('post', {
        'title': 'post',
        'body': 'body'
    })
});


app.listen(port, () => {
    console.log('App listening on port ' + port + '!');
});