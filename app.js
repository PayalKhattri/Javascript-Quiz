const express=require('express')
const app=express()

var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set("view engine","html")
app.use('/public',express.static('public'))

app.get('/',(req,res)=>{
    res.render('index.html')
})
app.get('*',(req,res) =>{
    res.send('404 not found')
})
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server Started')
})