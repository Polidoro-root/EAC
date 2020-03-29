
exports.up = function(knex) {
    return knex.schema.createTable('companies', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('cnpj').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('companies');
};
