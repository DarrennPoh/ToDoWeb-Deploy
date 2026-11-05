import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

// 1. Initialize Express
const app = express()
const PORT = process.env.PORT || 5003

// 2. Define __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 3. Middleware
app.use(express.json())

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../public')))

// 4. Routes
app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todoRoutes)

// Serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// 5. Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' })
})

// 6. 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})

// 7. Error handler
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
})

// 8. Export Express app for Vercel
export default app

// 9. Start local server only outside Vercel
if (process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`Server has started on port: ${PORT}`)
    })
}
