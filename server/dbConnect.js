const mongooes = require('mongoose');
// const User = require('./models/User');

module.exports = async ()=>{
        const mongoUrl = 'mongodb+srv://rudani:1892Jjj@@cluster0.8acofs1.mongodb.net/?retryWrites=true&w=majority'
        try{
            const connect = await mongooes.connect(mongoUrl,
                { useNewUrlParser: true, useUnifiedTopology: true },
                ()=>{
                console.log("mongodb connection: $");
            });
        }catch(e){
            console.log(e);
            process.exit(1); //automatically server se disconnect thai jase
        }
}
