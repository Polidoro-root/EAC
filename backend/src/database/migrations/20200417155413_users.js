
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id');        
        table.string('password').notNullable();        
        table.string('interestArea').notNullable();
        table.string('experienceArea').notNullable();
        table.string('lastJob').notNullable();
        table.string('aboutYourself').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};