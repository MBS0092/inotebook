const mongose = require('mongoose');
//inotebook
const mongoURl = "mongodb://localhost:27017/";

const connectToMongo = () =>{
    mongose.connect(mongoURl) 
    .then(()=>{
        console.log("Mongodb Connected Successfully!")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectToMongo;