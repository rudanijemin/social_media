const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { error, success } = require('../utils/responseWrapper');


const singupController = async (req,res)=>{
    try{

        const {name,email,password} = req.body;
        if(!email || !password || !name){
            // return res.status(400).send('all field are required');
            return res.send(error(400,'all field are required'))
        }

        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.send(error(409,'user is already register'))
            // return res.status(409).send('user is already register');
        }
        //user for passwoard hashing
        const hashedPasswoard = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password:hashedPasswoard
        });

        // return res.status(201).json({
        //     user,
        // })
        return res.send(success(201,'user created  successful ')
        );


        // res.send('signup')
    }catch(e){
        return res.send(error(500,e.massage))
    }
}

const loginController = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            // return res.status(400).send('all field are required');
            return res.send(error(400,'all field are required'))

        }

        const user = await User.findOne({email}).select('+password');
        if(!user){
            // return res.status(404).send('user is not register');
            return res.send(error(404,'user is not register'))

        }

        const matched = await bcrypt.compare(password,user.password);
        if(!matched){
            // return res.status(403).send('incorrect password');
            return res.send(error(403,'incorrect password'))

        }
        const accessToken = generateAccessToken({_id:user._id}); 
        const refreshToken = generateRefreshToken({_id:user._id}); 

        res.cookie('jwt',refreshToken,{
            httpOnly:true,
            Secure:true
        })
        // return res.json({accessToken});
        return res.send(success(200,{accessToken}));


     }catch(e){
        return res.send(error(500,e.massage))
    }
};

// this api will check the refreshToken validity and generate a new access token
const refreshAccessTokenController = async (req, res) => {
    const cookies = req.cookies;
    
    if(!cookies.jwt){
        // return res.status(401).send("refrsh token in cookies is required");
        return res.send(error(401,"refrsh token in cookies is required"))

    }
    const refreshToken =cookies.jwt;
    console.log('refresh',refreshTolen);
    // if (!refreshToken) {
    //     return res.status(401).send("Refresh token is required");
    // }

    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_PRIVATE_KEY
        );

        const _id = decoded._id;
        const accessToken = generateAccessToken({ _id });

        // return res.status(201).json({ accessToken });
        return res.send(success(201,{accessToken}))
    } catch (e) {
        console.log(e);
        // return res.status(401).send("Invalid refresh token");
        return res.send(error(401,"Invalid refresh token"))

    }
};
const logoutController = async (req, res) => {
    try {
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: true,
        })
        return res.send(success(200, 'user logged out'))
    } catch (e) {
        return res.send(error(500, e.message));
    }
}

//how to jounreate access token
//internal function

const generateAccessToken = (data)=>{
    try{
        const token= jwt.sign(data,process.env.ACCESS_TOKEN_PRIVATE_KEY,{
            expiresIn:'1d',
        });
        console.log(token);
        return token;
    }catch(e){
        console.log(e);
    }
 
}

const generateRefreshToken = (data)=>{
    try{
        const token= jwt.sign(data,process.env.REFRESH_TOKEN_PRIVATE_KEY,{
            expiresIn:'1y',
        });
        console.log(token);
        return token;
    }catch(e){
        console.log(e);
    }
 
}


module.exports={
    loginController,
    singupController,
    refreshAccessTokenController,
    logoutController
}