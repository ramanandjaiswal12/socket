const express = require('express')
const http = require('http')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const { json } = require('express')
const options = {
    cors: true,
    origins: "*",
}
var server = http.createServer(app)
var io = require('socket.io')(server, options)
app.set('port', 4001)

app.use(cors());
app.use(bodyParser.json())

var connections = []
console.log('Restarting server')
io.on('connection', (socket) => {

    console.log("conn socket.id")
    console.log(socket.id)
    connections.push(socket.id)
    console.log(connections.length)

    // app.get("/", (req, res) => {
    //     console.log("connections length++++++++++++++")

    //     // res.send(connections.length)

    // })

    socket.on('disconnect', () => {
        console.log("dis socket.id")
        console.log(socket.id)

        const index = connections.indexOf(socket.id);
        if (index > -1) {
            connections.splice(index, 1);
        }
        if (connections.length === 0) {
            connections = []

        }
        console.log(connections.length)
    })




})

server.listen(app.get('port'), () => {
    console.log("listening on", app.get('port'))
})