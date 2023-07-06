import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URL = process.env.MONGO_URI; 


const DBConnection = async () => {
    // 'mongodb+srv://ya46268:pass1234@cluster0.at6vzrr.mongodb.net/'  FileSharingApp
    //usually we put this inside .env file

    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log("DB is connected");
    }
    catch (error) {
        console.log("Error while connecting to db", error.message);
    }
}

export default DBConnection;