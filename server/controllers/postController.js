const { success } = require("../utils/responseWrapper");

const getAllPostController = async (req,res)=>{
    console.log(req._id);
    return res.send(success(200,'this are the post'));
}

module.exports ={
    getAllPostController
}