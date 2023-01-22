const singupController = async (req,res)=>{
    try{
        res.send('signup')
    }catch(e){

    }
}

const loginController = async (req,res)=>{
    try{
        res.send('login')
    }catch(e){

    }
}

module.exports={
    loginController,
    singupController
}