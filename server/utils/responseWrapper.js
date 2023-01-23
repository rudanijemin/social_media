const success =(statusCode , result)=>{
    return{
        status:'ok',
        statusCode,
        result
    }
}

const error =(statusCode, massage)=>{
    return{
        status:'error',
        statusCode,
        massage
    }
} 

module.exports={
    success,
    error
}