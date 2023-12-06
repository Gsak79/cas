import express from "express";
import {
    getAllEntries,
    addEntry,
    getEntryById,
    deleteEntry,
    editEntry,
    getAllPersonalEntries, getAllGroupEntries
} from "../controllers/entryController.js";
import multer from "multer";
import storage from "../cloudinary.js";
const entryRoutes = express()

const upload = multer({ storage: storage });

entryRoutes.get('/entries', async (req, res) => {
    const entries = await getAllEntries()
    res.send(entries)
})

entryRoutes.get('/entries/personal', async (req, res) => {
    const entries = await getAllPersonalEntries()
    res.send(entries)
})

entryRoutes.get('/entries/group', async (req, res) => {
    const entries = await getAllGroupEntries()
    res.send(entries)
})

entryRoutes.post('/entry', upload.any(), async (req, res) => {
    const entry = await addEntry(req.body, req.files)
    res.send(entry)
})

entryRoutes.get('/entry/:id', async (req, res) => {
    const entry = await getEntryById(req.params.id)
    res.send(entry)
})

entryRoutes.delete('/entry/:id', async (req, res) => {
    const entry = await deleteEntry(req.params.id)
    res.send(entry)
})

entryRoutes.put('/entry/:id', upload.any(), async (req, res) => {
    const entry = await editEntry(req.params.id, req.body, req.files)
    res.send(entry)
})

export default entryRoutes
