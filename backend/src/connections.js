const connections = [];

const addConnection = ({ id, email, room }) => {
    console.log(id, email, room);
    email = email.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingConnection = connections.find((connection) => 
        connection.room === room && connection.email === email);

    if(existingConnection){
        return { error: 'Username is taken'};
    }

    const connection = { id, email, room };

    connections.push(connection)    

    return { connection };
}

const removeConnection = (id) => {
    const index = connections.findIndex((connection) => connection.id === id);

    if(index !== -1){
        return connections.splice(index, 1)[0];
    }
}

const getConnection = (id) => connections.find((connection) => connection.id === id);

const getConnectionsInRoom = (room) => 
    connections.filter((connection) => connection.room === room);

module.exports = { addConnection, removeConnection, getConnection, getConnectionsInRoom };