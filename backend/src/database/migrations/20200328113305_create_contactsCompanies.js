
exports.up = function(knex) {
    return knex.schema.hasTable('contactsCompanies').then(function(exist){
        if(!exist){
            knex.schema.createTable('contactsCompanies', function(table){
                table.increments();
                table.integer('companiesId').notNullable();
                table.integer('contactsId').notNullable();
                table.foreign('companiesId').references('id').inTable('companies');
                table.foreign('contactsId').references('id').inTable('contacts');
            });
        }
    });
};

exports.down = function(knex) {
        return knex.schema.dropTableIfExists('contactCompanies');
};
