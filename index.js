import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import userModel from './userModel.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use(express.json())

// POST user

app.post('/api', async (req, res) => {
  const name = req.body.name

  try {
    const newUser = await userModel.create({ name })
    res.status(200).json({
      data: newUser,
    })
  } catch (error) {
    res.status(500).json({
      error: error,
    })
  }
})

// READ user

app.get('/api', async (req, res) => {
  try {
    const names = await userModel.find()
    res.json(names)
  } catch (error) {
    res.status(500).send(error)
  }
})

// GET single user

app.get('/api/:id', async (req, res) => {
  const { id } = req.params
  try {
    const existingName = await userModel.findById(id)
    res.json(existingName)
  } catch (error) {
    res.status(500).send(error)
  }
})

// UPDATE (PUT) user

app.put('/api/:id', async (req, res) => {
  const { id } = req.params
  const updatedName = req.body

  try {
    const changeUserName = await userModel.findByIdAndUpdate(id, updatedName, {
      new: true,
    })

    if (!changeUserName) {
      return res.status(404).json({ error: 'User does not exist' })
    }

    res.status(200).json(changeUserName)
  } catch (error) {
    res.status(500).send(error)
  }
})

// DELETE user

app.delete('/api/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deleteUser = await userModel.findByIdAndDelete(id)

    res.status(200).json('User deleted successfully')
  } catch (error) {
    res.status(500).send(error)
  }
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
