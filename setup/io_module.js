
const config = require('../configs')
const server_io = require('http').createServer();
const PORT_IO = config.PORT_IO

module.exports = async function () {    
    let activeUsers = new Array
    const io = require('socket.io')(server_io, {
        path: '/',
        serveClient: false,
        // below are engine.IO options
        pingInterval: 10000,
        pingTimeout: 5000,
        cookie: false
    });

    server_io.listen(PORT_IO);
    console.log('IO Listen Port :' + PORT_IO)


    io.on("connect", function (socket) {
        // console.log(socket)
        console.log('SOME 1 Connect')

        socket.on("new user", function (data) {
            socket.userId = data;
            activeUsers.push(data)
            console.log(activeUsers, 'activeUsers')
            io.emit("new user", [...activeUsers]);
        });

        socket.on("disconnect", () => {
            activeUsers.pop()
            console.log(socket.userId + 'Log Out')
            //activeUsers.delete(socket.userId);
            io.emit("user disconnected", socket.userId);
        });

        socket.on("chat message", function (data) {
            let messageSend = {
                user: socket.userId,
                message: data
            }
            io.emit("chat message", messageSend);
        });

        socket.on("typing", function (data) {
            socket.broadcast.emit("typing", data);
        });
    });
}