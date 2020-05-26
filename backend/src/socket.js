const { server } = require('./app');
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('We have a new connection!');    

    socket.on('join', ({ email, room, previousRoom }) => {
        socket.leave(previousRoom);
        console.log('[LEAVE] => ', { previousRoom: previousRoom });

        socket.join(room);
            
        console.log('[JOIN] => ', { id: socket.id, email: email, room: room });
    });

    socket.on('sendMessage', ({ email, room, message }) => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        const created_at = `${hours}:${minutes < 10 ? `0${minutes}` : minutes }`;

        console.log('[SEND MESSAGE] => ', email, message, created_at);

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