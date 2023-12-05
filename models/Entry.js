import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    date: Date
});

export default mongoose.model('Entry', entrySchema, 'entries');