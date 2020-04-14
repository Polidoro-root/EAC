const connection = require('../database/connection');

module.exports = {
    async alterContact(request, response){        
        const id = request.headers.id       

        const { email, phone } = request.body;

        const contact = await connection('contacts')
            .where('id', id)            
            .update({
                email: email,
                phone: phone
            });

        return response.json(contact);
    }
};