const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const authRouter = require('./routers/authRouter');
const morgan = require('morgan');
const postRouter = require('./routers/postRouter');
const userRouter = require("./routers/userRouter");
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary').v2;
const cors = require('cors')




// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

dotenv.config('./.env');
const app = express();

//middlware
app.use(express.json({limit: '10mb'}));
app.use(morgan('common'));

app.use('/auth',authRouter);
app.use('/post',postRouter);
app.use('/user', userRouter)

app.use(cookieParser());
app.use(cors({
    Credential:true,
    origin:"http://localhost:3000"
}));
app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT =  process.env.PORT || 4000;
dbConnect();
app.listen(PORT,()=>{
    console.log('listening on port:',PORT);
});