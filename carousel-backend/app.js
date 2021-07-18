const express = require('express')
const cors = require('cors')
const compression = require('compression')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded())
app.use(cors({ origin: true, credentials: true }));
app.use(compression())

app.get('/',(req,res) => {
    res.status(200).send("HI OWNR")
})

app.use('/healthcheck',(req,res) => {
    res.status(200).send("ALL GOOD")
})

app.use('/api',router)


app.use((req,res,next) => {
    res.status(500).send('Server error')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});