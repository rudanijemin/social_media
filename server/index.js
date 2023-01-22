const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const authRouter = require('./routers/authRouter');


dotenv.config('./.env');
const app = express();

app.use('/auth',authRouter)
app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT =  process.env.PORT || 4000;
dbConnect();
app.listen(PORT,()=>{
    console.log('listening on port:',PORT);
});