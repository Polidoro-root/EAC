
exports.up = function(knex) {
    return knex.schema.createTable('chat', function(table){
        table.increments();
        table.integer('usersId').unsigned();
        table.integer('companiesId').unsigned();
        table.string('userFileText').notNullable();
        table.string('companyFileText').notNullable();
        table.foreign('usersId').references('id').inTable('users');
        table.foreign('companiesId').references('id').inTable('companies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('chat');
};
