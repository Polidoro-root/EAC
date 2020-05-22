const connection = require('../database/connection');

module.exports = {
    async getMessages(request, response){
        const { id } = request.params;        

        const messages = await connection('messages')
            .where({
                messagesChatsId: id
            })
            .select('*');
        console.log(messages);

        return response.json(messages);
    },

    async inputMessage(request, response){
        const chatId = request.headers.chatid;
        const { email, message } = request.body;

        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes }`;

        const [insertedMessage] = await connection('messages')
            .returning('*')
            .insert({
                messagesChatsId: chatId,
                messages: {
                    email: email,
                    message: message
                },
                created_at: time
            });
        
        console.log(insertedMessage);
    },

    async deleteMessages(request, response){
        const { id } = request.params;

        await connection('messages')
            .where({
                messagesChatsId: id
            })
            .del();
        
        return response.status(204).send();
    },
};