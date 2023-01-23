const mongooes = require("mongoose");
const userSchema = mongooes.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongooes.model('user',userSchema); 