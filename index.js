import express from "express"

const port = 8000;
const app = express();

app.all('/hello', (req, res, next) => {
    console.log('All');
    next();
})

const cb = (req, res, next) => {
    console.log('CB');
    next();
};

app.get('/hello', (req, res) => {
        res.send('Hello World!');
    })

// app.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })


app.listen(port, () => {
    console.log(`Server start on http://localhost:${port}`);
})