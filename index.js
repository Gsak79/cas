import 'dotenv/config'
import express from 'express'
import entryRoutes from './routes/entryRoutes.js'
import connectDB from "./db.js";

const app = express()

app.use(express.json())

app.use('/api/v1', entryRoutes)

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`server started successfully on port ${process.env.PORT}`)
})
