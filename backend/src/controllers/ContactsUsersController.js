const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const contactsUsers = await connection('contactsUsers').select('*');
        return response.json(contactsUsers);
    },

    async create(request, response){
        const usersId = request.headers.usersid;
        const usersId = request.headers.usersid;
    },

    async delete(request, response){}
};