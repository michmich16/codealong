const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000


app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.send('hey du');
});

app.post("/signin", (req, res) =>{
    console.log(req.body);

    if(req.body.email === "admin@admin.com" && req.body.password ==="1234512345"){
        res.send({token: process.env.AUTH_TOKEN});
    }
})

app.listen(port,() => {
console.log('server runs at', port);
});