//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Create comments array
const comments = [
    { username: 'Alice', comment: 'I love the weather today' },
    { username: 'Bob', comment: 'I love the book' },
    { username: 'Charlie', comment: 'I love the banana' }
];

//Create GET method
app.get('/comments', (req, res) => {
    res.json(comments);
});

//Create POST method
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

//Create PUT method
app.put('/comments/:index', (req, res) => {
    const index = req.params.index;
    const newComment = req.body;
    comments[index] = newComment;
    res.json(newComment);
});

//Create DELETE method
app.delete('/comments/:index', (req, res) => {
    const index = req.params.index;
    comments.splice(index, 1);
    res.json({ deleted: true });
});

//Listen to port
app.listen(port, () => {
    console.log(`Create Web Server is running on http://localhost:${port}`);
});