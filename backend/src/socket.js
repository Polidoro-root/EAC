const { server } = require('./app');
const io = require('socket.io')(server);
const { now } = require('./utils');

io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('join', ({ email, room, previousRoom }) => {
        socket.leave(previousRoom);        

        socket.join(room);                
    });

    socket.on('sendMessage', ({ email, room, message }) => {        
        const created_at = now();

        io.to(room).emit('message', {
            email: email,
            message: message,
            created_at: created_at
        });        
    });

    socket.on('disconnect', () => {        
        console.log('DISCONNECTED!!');        
    });
});

module.exports = io;