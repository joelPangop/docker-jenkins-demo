const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send("Helle World");
})

const server = app.listen(4000, function (){
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening as http://%s:%s', host, port);
})
