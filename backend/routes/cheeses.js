const { getCheeses, createCheese, findCheese, deleteCheese, updateCheese } = require('../controllers/cheeseController')

function handleCheeseRequest(req, res) {
    if(req.url === '/cheeses' && req.method === 'GET') {

        const cheeses = getCheeses();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cheeses));
    }
    
    else if (req.url === '/createcheese') {
        //create a cheese with posted data
        res.writeHead(418, { 'Content-Type': 'text/html' });
        res.write('<h1>Not enough time to implement this one</h1>');
        res.end();
    }

    else if (req.url === '/findcheese') {
        //find a cheese in the list from posted id
        res.writeHead(418, { 'Content-Type': 'text/html' });
        res.write('<h1>Not enough time to implement this one</h1>');
        res.end();
    }

    else if (req.url === '/deletecheese') {
        //delete a cheese from the list with posted id
        res.writeHead(418, { 'Content-Type': 'text/html' });
        res.write('<h1>Not enough time to implement this one</h1>');
        res.end();
    }

    else if (req.url === '/updatecheese') {
        //update a cheese in the list from posted id with new posted data
        res.writeHead(418, { 'Content-Type': 'text/html' });
        res.write('<h1>Not enough time to implement this one</h1>');
        res.end();
    }
    
    else {
        //no gouda for you
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Error Page Not Found</h1>');
        res.end();
    }
}
module.exports = { handleCheeseRequest };