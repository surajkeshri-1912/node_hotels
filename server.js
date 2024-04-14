const express=require('express')
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json()); // req.body (store)

app.get('/',(req,res)=>{
    res.send('welcome to our hotel')
})
//Import the Router Files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

// use the Router files
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes);

app.listen(2000,()=>{
    console.log("listening on port number 2000")
})
