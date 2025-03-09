import mongoose from 'mongoose'

const connectToDB = async():Promise<void> =>{
    if(mongoose.connections[0].readyState)
    {
        console.log("Already connected to mongoDB.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as mongoose.ConnectOptions);
        console.log("Successfully connected to MongoDB.");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

export default connectToDB;