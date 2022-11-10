const express = require('express')
const app = express()
const path = require("path")
// enable POST
app.use(express.urlencoded({extended: true}))

// enable static
app.use(express.static(path.join(__dirname, 'public')))

// use templates
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 4000

app.get('/', (req, res) => {
    res.render('index', {
        title: "Bezeroak",
        test: "Proba"
    })
})

app.get("/test", function(req, res) {
    console.log("Hau test bat da")

    res.json([])
})


app.get("/user/:zer/:identifikatzaile", function(req, res) {
    res.send(`Zer: ${req.params.zer}  ${req.params.identifikatzaile} !`)
})


app.post('/jaso', (req, res) => {
    res.send(`Kaixo ${req.body.izen} ${req.body.abizen}`)
})

app.put('/', (req, res) => {
    res.send("Kaixo PUT " + JSON.stringify(req.query))
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})