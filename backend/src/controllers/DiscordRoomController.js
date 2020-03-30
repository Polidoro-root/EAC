const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const discordRooms = await connection('discordRooms').select('*');
        return response.json(discordRooms);
    },

    async create(request, response){
        const favoritesId = request.headers.favoritesid;
        const contactsUsersId = request.headers.contactsusersid;
        const contactsCompaniesId = request.headers.contactscompaniesid;

        await connection('discordRooms').insert({
            favoritesId,
            contactsUsersId,
            contactsCompaniesId
        });

        return response.json({
            favoritesId,
            contactsUsersId,
            contactsCompaniesId
        });
    },

    async delete(request, response){
        const { id } = request.params;

        const favoritesId = request.headers.favoritesid;
        const contactsUsersId = request.headers.contactsusersid;
        const contactsCompaniesId = request.headers.contactscompaniesid;

        const discordRooms = await connection('discordRooms')
            .where('id', id)
            .select('favoritesId', 'contactsUsersId', 'contactsCompaniesId')
            .first();

        console.log(discordRooms.favoritesId, favoritesId);
        console.log(discordRooms.contactsUsersId, contactsUsersId);
        console.log(discordRooms.contactsCompaniesId, contactsCompaniesId);
        
        if(discordRooms.favoritesId != favoritesId){        
            return response.status(401).json({error: 'Operation not Permited: FavoritesId'});
        }
        if(discordRooms.contactsUsersId != contactsUsersId){        
            return response.status(401).json({error: 'Operation not Permited: ContactsUsersId'});
        }
        if(discordRooms.contactsCompaniesId != contactsCompaniesId){        
            return response.status(401).json({error: 'Operation not Permited: ContactsCompaniesId'});
        }
        
        await connection('discordRooms')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};