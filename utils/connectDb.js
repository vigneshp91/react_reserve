import mongoose from 'mongoose';
const connection = {};

 async function connectDb(){
    console.log("Initiating DB connection...");
    if(connection.isConnected){
        console.log("Connection already present");
        return;
    }
    const conn = await mongoose.connect(process.env.MONGO_SRV,{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("Connection established");
    // console.log(conn.connections)
    connection.isConnected = conn.connections[0].readyState;
}

export default connectDb

