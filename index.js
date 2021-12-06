const express = require('express')
const port = 5000
const app = express()

app.get('/', (req, res) => {
    res.send("Authors API")
  })

  app.get('/authors/:id/', (req, res) => {
    let id = req.params.id
    let name = "";
    let nationality = "";
    let books = [""];

    switch (id) {
        case "1":
            name = "Lawrence Nowell"
            nationality = "UK";
            books = ["Beowulf"]
            break;
        
        case "2":
            name = "William Shakespeare",
            nationality = "UK";
            books = ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
            break;

        case "3":
            name = "Charles Dickens"
            nationality = "US";
            books = ["Oliver Twist", "A Christmas Carol"]
            break;
        
        case "4":
            name = "Oscar Wilde"
            nationality = "UK";
            books = ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
            break; 

        default:
            name = "not found"
            nationality = "not found"
			books = "none"
            break;
    }

    res.send(`${name}, ${nationality}`);
});

app.listen(port, () => {
    // console.log('Server started on port: ' + port)
  })