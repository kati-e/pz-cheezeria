const http = require('http');
const cors = require('cors') //need this to avoid cors errors coming up on the frontend when calling the api
const { handleCheeseRequest } = require('./routes/cheeses')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    handleCheeseRequest(req,res);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});