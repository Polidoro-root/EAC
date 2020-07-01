const server = require('./app');
const io = require('socket.io')(server);
const { now } = require('./utils');

const host = 'localhost';
const port = 3333;

io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('join', ({ email, room, previousRoom }) => {
        socket.leave(previousRoom);

        socket.join(room);
        console.log(email, previousRoom, room);
    });

    socket.on('sendMessage', ({ email, room, message }) => {
        const created_at = now();

        console.log(email, room, message);

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

server.listen(port, () => {
    console.log(`[HTTP] Listen => Server is running at http://${host}:${port}`);
});