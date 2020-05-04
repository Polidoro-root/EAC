const { server } = require('./app');
const routes = require('./routes');
const io = require('socket.io')(server);

const {
    addConnection,
    removeConnection,
    getConnection,
    getConnectionsInRoom
} = require('./connections');

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');    

    socket.on('join', ({ email, room }, callback) => {
        const { error, connection } = addConnection({ id: socket.id, email, room });

        if(error) return callback(error);

        socket.emit('message', {
            connection: 'admin',
            text: `${connection.email}, welcome to the room ${connection.room}`
        });

        socket.broadcast.to(connection.room).emit('message', {
            connection: 'admin',
            text: `${connection.email}, has joined!`
        });

        socket.join(connection.room);

        io.to(connection.room).emit('roomData', {
            connection: connection.room,
            connections: getConnectionsInRoom(connection.room)
        });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const connection = getConnection(socket.id);

        console.log(message);

        io.to(connection.room).emit('message', { 
            connection: connection.email,
            text: message
        });

        io.to(connection.room).emit('roomData', { 
            room: connection.room,
            connections: getConnectionsInRoom(connection.room)
        });

        callback();
    });

    socket.on('disconnect', () => {
        const connection = removeConnection(socket.id);
        console.log('disconnected');

        if(connection){
            io.to(connection.room).emit('message', {
                connection: 'admin',
                text: `${connection.email} has left.`
            });            
        }
    });
});

module.exports = io;