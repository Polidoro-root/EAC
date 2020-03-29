
exports.up = function(knex) {
    return knex.schema.createTable('addresses', function(table){
        table.increments();
        table.integer('usersId').unsigned();
        table.integer('companiesId').unsigned();
        table.integer('vacanciesId').unsigned();
        table.string('zipCode');
        table.string('publicPlace').notNullable();
        table.integer('number').notNullable();
        table.string('neighborhood').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.foreign('usersId').references('id').inTable('users');            
        table.foreign('companiesId').references('id').inTable('companies');        
        table.foreign('vacanciesId').references('id').inTable('vacancies');            
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('addresses');
};
