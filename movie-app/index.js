let express=require('express');
let apiRoutes=require('./api-routes');
let bodyparser=require('body-parser');
let mongoose=require('mongoose');
let app=express();
var cors1=require('cors');
app.use(cors1());
let router=require('express').Router();
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost/resthub',{useNewUrlParser: true});
var db=mongoose.connection;
if(!db)
console.log("error connecting db");
else
console.log("db connected successfully");
app.get('/',(req,res)=>
{
    res.send(JSON.stringify('Hello world from express js'))
});




let port=process.env.PORT||8000;

app.use('/api',apiRoutes);

app.listen(port,()=>{
    console.log('server started');
});

app.use('/api/v1',router);