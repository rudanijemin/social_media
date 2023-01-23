const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const authRouter = require('./routers/authRouter');
const morgan = require('morgan');
const postRouter = require('./routers/postRouter');


dotenv.config('./.env');
const app = express();

//middlware
app.use(express.json());
app.use(morgan('common'));

app.use('/auth',authRouter);
app.use('/post',postRouter);
app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT =  process.env.PORT || 4000;
dbConnect();
app.listen(PORT,()=>{
    console.log('listening on port:',PORT);
});