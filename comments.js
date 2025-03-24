// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middleware to parse JSON bodies
app.use(bodyParser.json())

// In-memory storage for comments
let comments = []

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments)
})

// Route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body
  comments.push(comment)
  res.status(201).json(comment)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})