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
        console.log('[SEND MESSAGE] => ', socket.id, message);

        io.to(room).emit('message', {            
            message: message
        });        
    });

    socket.on('disconnect', () => {        
        console.log('DISCONNECTED!!');        
    });
});

module.exports = io;