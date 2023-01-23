const getAllPostController = async (req,res)=>{
    console.log(req._id);
    return res.send('this are the post');
}

module.exports ={
    getAllPostController
}