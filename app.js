const express = require('express');
const app = express();

const server = app.listen(8080, () => console.log('Server Up'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home', {
        titulo: "Clase 10 de Backend"
    })
})
