const connection = require('../database/connection');

module.exports = {
    async listChats(request, response){
        const userId = request.headers.userid;
        const companyId = request.headers.companyid;

        console.log(userId, companyId);

        if(userId){
            const chats = await connection('chats')
                .join('companies', 'chats.chatsCompaniesId', 'companies.id')
                .join('vacancies', 'chats.chatsVacanciesId', 'vacancies.id')
                .where({
                    chatsUsersId: userId
                })
                .select('chats.id as chatId', 'chats.chatsCompaniesId as companyId',
                    'chats.chatsVacanciesId as vacancyId', 'companies.name',
                    'vacancies.vacancy'
                );

            return response.json(chats);
        }
        if(companyId){
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
        }
    },

    async createChat(request, response){
        const userId = request.headers.userid;
        const companyId = request.headers.companyid;
        const vacancyId = request.headers.vacancyid;

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