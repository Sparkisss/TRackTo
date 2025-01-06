require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')

const Task = require('./models/Task')

const PORT = process.env.PORT || 7000

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}))
app.use('/', router)
app.use(errorMiddleware)

app.post('/add/task', async (req, res) => {
    const {belong, title, description, status} = req.body
    const post = await Task.create({belong, title, description, status})
    res.status(200).json('OK')
})

app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params
    const { belong, title, description, status } = req.body

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { belong, title, description, status },
            { new: true }
        )

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' })
        }

        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error })
    }
})

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deletedTask = await Task.findByIdAndDelete(id)

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' })
        }

        res.status(200).json({ message: 'Task deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error })
    }
})

app.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('/task/:id', async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json({ message: 'Task not found'})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`Working on PORT = ${PORT}`))        
    } catch (error) {
        console.log(error)
    }
}

start()