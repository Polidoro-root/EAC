const connection = require('../database/connection');

module.exports = {
    async listUserChats(request, response){
        const userId = request.headers.userid;
        
        const chats = await connection('chats')
            .join('companies', 'chats.chatsCompaniesId', 'companies.id')
            .join('contacts', 'companies.id', 'contacts.contactsCompaniesId')
            .join('vacancies', 'chats.chatsVacanciesId', 'vacancies.id')
            .where({
                chatsUsersId: userId
            })
            .select('chats.id as chatId', 'chats.chatsCompaniesId as companyId',
                'chats.chatsVacanciesId as vacancyId', 'contacts.email',
                'vacancies.vacancy'
            );
        
        return response.json(chats);
    },

    async listCompanyChats(request, response){
        const companyId = request.headers.companyid;

        const chats = await connection('chats')
            .join('users', 'chats.chatsUsersId', 'users.id')
            .join('contacts', 'users.id', 'contacts.contactsUsersId')
            .join('vacancies', 'chats.chatsVacanciesId', 'vacancies.id')
            .where({
                chatsCompaniesId: companyId
            })
            .select('chats.id as chatId', 'chats.chatsUsersId as userId',
                'chats.chatsVacanciesId as vacancyId', 'contacts.email',
                'vacancies.vacancy'
            );                    

        return response.json(chats);
    },

    async createChat(request, response){
        const userId = request.headers.userid;
        const companyId = request.headers.companyid;
        const vacancyId = request.headers.vacancyid;

        console.log(userId, companyId, vacancyId);

        const [chat] = await connection('chats')
            .returning('*')
            .insert({
                chatsUsersId: userId,
                chatsCompaniesId: companyId,
                chatsVacanciesId: vacancyId
            });

        return response.json(chat);
    }
};