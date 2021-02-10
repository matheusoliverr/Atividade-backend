const express = require('express')
const nunjucks = require('nunjucks')
const cards = require('./data')

const server = express()

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.set("view engine", "njk")
server.use(express.static('public'))

server.get("/", function(req,res){
    const about = {
        img_url: 'https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg',
        name: "Rocketseat",
        slogan: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
        technologies: [
            { name: "Python" },
            { name: "JavaScript" },
            { name: "PHP" },
            { name: "HTML" }],
        medias: [
            { name: "Facebook", url: "http://facebook.com" },
            { name: "Instagram", url: "http://instagram.com" },
            { name: "Youtube", url: "http://youtube.com"}
        ]       
    }

    return res.render("about", {about})
})

server.get("/cards", function(req,res){
    return res.render("cards", {cards})
})

server.get("/cards/:id", function(req,res){
    const id = req.params.id;

    const card = cards.find(function(card){
        return card.id == id
    })
    if(!card){
        return res.render("not-found")
    }
    return res.render("page", {card})
})

server.use(function(req,res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("Server is running!")
})