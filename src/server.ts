import express from 'express'
import { wrap } from 'express-better-async-wrap'

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
let n: number = 0
let concurrent = 0;
const app = express()
app.get('/ping', wrap(async (req, res) => {
    const text = `${req.socket.localPort}: ${++n} in-progress: ${++concurrent}`
    console.log(`START: ${text}`)
    await wait(1000);
    console.log(`END:   ${text}`)
    concurrent--;
    res.send(`${text}`)
}))
app.listen(3000);
app.listen(3001);
app.listen(3002);
app.listen(3003);