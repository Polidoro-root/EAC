
exports.up = function(knex) {
    return knex.schema.createTable('invitations', function(table){
        table.increments('id');
        table.integer('invitationsUsersId').notNullable();
        table.integer('invitationsCompaniesId').notNullable();
        table.integer('invitationsVacanciesId').notNullable();
        table.boolean('accepted').defaultTo('false');
        table.foreign('invitationsUsersId').references('id').inTable('users');
        table.foreign('invitationsCompaniesId').references('id').inTable('companies');
        table.foreign('invitationsVacanciesId').references('id').inTable('vacancies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('invitations');
};
