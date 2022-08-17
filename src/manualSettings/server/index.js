import express from 'express'

const app = express()
const port = 3000
const okStatusObject = { ok: true }

app.use(express.json())

app.get('/', (req, res) => {
    res.send('GET request was received')
    console.log('GET request was received')
})

app.post('/', (req, res) => {
    console.log('POST request was received', req.body)
    res.status(200).send(okStatusObject)
})

app.listen(port, () => {
    console.log('listen port', port)
})