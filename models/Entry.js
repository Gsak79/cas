import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    date: Date,
    images: [
        {
            _id: false,
            url: String,
            name: String
        }
    ]
});

export default mongoose.model('Entry', entrySchema, 'entries');