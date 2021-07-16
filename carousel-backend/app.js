const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded())
app.use(cors({ origin: true, credentials: true }));

app.use('/healthcheck',(req,res) => {
    res.status(200).send("HI OWNR")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});