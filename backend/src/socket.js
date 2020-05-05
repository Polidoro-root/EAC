const { server } = require('./app');
const routes = require('./routes');
const io = require('socket.io')(server);
const { 
    addConnection,
    removeConnection,
    getConnection,
    getConnectionsInRoom
} = require('./connections');
// socket.on('', () => {});
io.on('connection', (socket) => {
    console.log('We have a new connection!');    

    socket.on('join', ({ email, room }) => {
        removeConnection(email);
        const connection = addConnection({ id: socket.id, email: email, room: room });
        
        socket.join(connection.room);

        io.to(connection.room).emit('roomData', {
            room: connection.room,
            connections: getConnectionsInRoom(connection.room)
        });
        
        console.log('[JOIN] => ', connection);
    });

    socket.on('sendMessage', (message) => {
        const connection = getConnection(socket.id);

        console.log('[SEND MESSAGE] => ', connection, message);

        io.to(connection.room).emit('message', {
            connection: connection.email,
            message: message
        });

        io.to(connection.room).emit('roomData', {
            room: connection.room,
            connections: getConnectionsInRoom(connection.room)
        });
    });

    socket.on('disconnect', () => {        
        console.log('DISCONNECTED!!');        
    });
});

module.exports = io;