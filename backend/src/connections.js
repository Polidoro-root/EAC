let connections = [];

const addConnection = ({ id, email, room }) => {
    email = email.trim();
    room = room.trim();

    const existingConnection = connections.find((connection) =>
        connection.room === room && connection.email === email);

    if(existingConnection) return { error: 'This email is taken' }

    const connection = { id: id, email: email, room: room };    
    
    connections.push(connection);    

    return connection;
}

const removeConnection = (id) => {
    const index = connections.find((connection) => {
        if(connection.id === id) return connection;
    });

    if(index !== -1){
        const connection = connections.splice(index, 1)[0];
        console.log('Connection removed => ', connection);
    }
}

const getConnection = (id) => connections.find((connection) => connection.id === id);

const getConnectionsInRoom = (room) => 
    connections.filter((connection) => connection.room === room);

module.exports = { addConnection, removeConnection, getConnection, getConnectionsInRoom };