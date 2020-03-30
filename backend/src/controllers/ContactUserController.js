const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const contactsUsers = await connection('contactsUsers').select('*');
        return response.json(contactsUsers);
    },

    async create(request, response){
        const usersId = request.headers.usersid;
        const contactsId = request.headers.contactsid;

        await connection('contactsUsers').insert({
            usersId,
            contactsId
        });

        return response.json({
            usersId,
            contactsId
        });
    },

    async delete(request, response){
        const { id } = request.params;

        const usersId = request.headers.usersid;
        const contactsId = request.headers.contactsid;

        const contactsUsers = await connection('contactsUsers')
            .where('id', id)
            .select('usersId', 'contactsId')
            .first();
            
            if(contactsUsers.usersId != usersId){        
                return response.status(401).json({error: 'Operation not Permited: UserId'});
            }
            if(contactsUsers.contactsId != contactsId){
                return response.status(401).json({error: 'Operation not Permited: ContactsId'});            
            }

        await connection('contactsUsers')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};