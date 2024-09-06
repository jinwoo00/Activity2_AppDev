const express = require('express');
const app = express();

const port = process.env.PORT||3000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('base',{title:"Log in Page"});
})

app.get('/home', (req, res) => {
    res.render('home', { title: "Home Page" });
});

app.get('/register', (req, res) => {
    res.render('register', { title: "Register Page" });
});

app.post('/', (req, res) => {
    res.redirect('/home');
});

app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")});