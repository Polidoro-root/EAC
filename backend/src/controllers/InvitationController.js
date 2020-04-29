const connection = require('../database/connection');

module.exports = {
    async showInvitations(request, response){        
        const companyId = request.headers.companyid;    

        let invitations = await connection('invitations')
            .join('users', 'invitations.invitationsUsersId', 'users.id')
            .join('vacancies', 'invitations.invitationsVacanciesId', 'vacancies.id')
            .where({                
                'invitations.invitationsCompaniesId': companyId,
                'invitations.accepted': false
            })
            .select('invitations.*', 'vacancies.id as vacancyId', 'vacancies.vacancy',
                'users.id as userId','users.interestArea', 'users.experienceArea',
                'users.lastJob', 'users.aboutYourself'
            );        

        for (let index in invitations) {
            invitations[index]['graduations'] = await connection('graduations')
                .where('graduationsUsersId', '=', invitations[index]['invitationsUsersId'])
                .select('*');            
        }

        return response.json(invitations);
    },

    async createInvitation(request, response){
        const { userId, companyId, vacancyId } = request.body;

        console.log(userId, companyId, vacancyId);

        const [invite] = await connection('invitations')
            .returning('*')
            .insert({
                invitationsUsersId: userId,
                invitationsCompaniesId: companyId,
                invitationsVacanciesId: vacancyId,
            });

        return response.json(invite);
    },

    async acceptInvitation(request, response){
        const invitationId = request.params;
        console.log(invitationId.id);

        const [invitation] = await connection('invitations')
            .returning('*')
            .update({
                accepted: true
            })
            .where({
                id: invitationId.id,
                accepted: false
            });

        return response.json(invitation);
    },

    async deleteInvitation(request, response){
        const { id } = request.params;
        const companyId = request.headers.companyid;

        const invitation = await connection('invitations')
          .where('id', id)
          .select('invitationsCompaniesId')
          .first();        

        if (invitation.invitationsCompaniesId != companyId) {
          return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('invitations')
            .where('id', id)
            .del();

        return response.status(204).send();
    }
};