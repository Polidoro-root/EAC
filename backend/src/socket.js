const { server } = require('./app');
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('[IO] Connection => Server has a new connection');

    socket.on('chat.message', (data) => {
        console.log('[SOCKET] Chat.Message => ', data);

        io.emit('chat.message', data);
    });

    socket.on('disconnect', () => {
        console.log('[SOCKET] Disconnect => A connection was disconnected');        
    });
});

module.exports = io;