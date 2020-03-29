
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments();
        table.string('name').notNullable();
        table.date('birthDate').notNullable();
        table.string('password').notNullable();
        table.enum('sex', ['M', 'F']).notNullable();
        table.string('interestArea').notNullable();
        table.string('experienceArea').notNullable();
        table.string('lastJob').notNullable();
        table.string('aboutYourself').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
