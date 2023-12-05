import 'dotenv/config'
import mongoose from "mongoose";

function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to database successfully')
        })
}

export default connectDB