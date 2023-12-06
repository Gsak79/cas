import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    title: String,
    description1: String,
    description2: String,
    description3: String,
    reflexion1: String,
    reflexion2: String,
    reflexion3: String,
    resultado1: String,
    resultado2: String,
    resultado3: String,
    date1: Date,
    date2: Date,
    date3: Date,
    meta: String,
    permisos: String,
    pasos: String,
    dificultades: String,
    riesgos: String,
    experience: String,

    images: [
        {
            _id: false,
            url: String,
            name: String
        }
    ]
});

export default mongoose.model('Entry', entrySchema, 'entries');