const express = require('express')
const app = express()
const path = require("path")
const port = process.env.PORT || 8000

// static file 

const staticpath = (path.join(__dirname,"../public"))

app.use(express.static(staticpath))

// routing 

app.get('/', (req,res) =>
{
    res.send("welcome to this home page yeah")
})
app.get('/about', (req,res) =>
{
    res.send("welcome to this about page")
})
app.get('/weather', (req,res) =>
{
    res.send("welcome to this weather page")
})
app.get('*', (req,res) =>
{
    res.send("oops error page")
})
app.listen(port,() =>
{
    console.log(`server is listening  on ${port}`)
})