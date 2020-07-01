const connection = require('../database/connection');
const { now } = require('../utils');

module.exports = {
    async getMessages(request, response){
        const { id } = request.params;        

        const messages = await connection('messages')
            .where({
                messagesChatsId: id
            })
            .select('*');        

        return response.json(messages);
    },

    async inputMessage(request, response){
        const chatId = request.headers.chatid;
        const { email, message } = request.body;
        
        const time = now();

        await connection('messages')            
            .insert({
                messagesChatsId: chatId,
                messages: {
                    email,
                    message
                },
                created_at: time
            });            
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