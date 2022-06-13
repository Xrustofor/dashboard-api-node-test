import express from "express";

const usersRouter = express.Router();

usersRouter.use((res, req, next) => {
    console.log(`Heandler for users`);
    next()
})

usersRouter.get('/login', (req, res) => {
    res.send('login')
})

usersRouter.get('/register', (req, res) => {
    res.send('register')
});

export { usersRouter };