const { default: mongoose } = require("mongoose")

const dbConnect = ()=>{
    try{
    const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connection established " + conn)
    }catch(err){
        console.log("Database error")
    }
}

module.exports = dbConnect