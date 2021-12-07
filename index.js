const express = require('express')
const port = 5000
const app = express()


var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
  ]
  
  //Exercice 1

app.get('/', (req, res) => {
    res.send("Authors API")
  })
  
  //Exercice 2

app.get('/authors/:id/', (req, res) => {
    const { id } = req.params
    const author = authors[id - 1]
    res.send( `${author.name}, ${author.nationality}` )
  })

  //Exercice 3

app.get('/authors/:id/books/', (req, res) => {
    const { id } = req.params
    const books = authors[id - 1].books
    res.send(books.join(''))
})

    //Exercice 4

app.get('/json/authors/:id', (req, res) => {
    const { id } = req.params
    const author = authors[id - 1]
    res.json({
        name: `${author.name}`,
        nationality: `${author.nationality}`
    })
})

app.get('/json/authors/:id/books', (req, res) => {
    const { id } = req.params
    const books = authors[id - 1].books
    res.json({
        books: [`${books}`],
    })
})

app.listen(port, () => {
    console.log('Server started on port: ' + port)
  })