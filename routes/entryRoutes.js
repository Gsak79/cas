import express from "express";
import { getAllEntries, addEntry, getEntryById, deleteEntry, editEntry } from "../controllers/entryController.js";
const entryRoutes = express()

entryRoutes.get('/entries', async (req, res) => {
    const entries = await getAllEntries()
    res.send(entries)
})

entryRoutes.post('/entry', async (req, res) => {
    const entry = await addEntry(req.body)
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

entryRoutes.put('/entry/:id', async (req, res) => {
    const entry = await editEntry(req.params.id, req.body)
    res.send(entry)
})

export default entryRoutes
