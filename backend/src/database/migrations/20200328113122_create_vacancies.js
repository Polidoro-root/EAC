
exports.up = function(knex) {
    return knex.schema.createTable('vacancies', function(table){
        table.increments();
        table.integer('companiesId').notNullable();
        table.string('vacancy').notNullable();
        table.decimal('salary').notNullable();
        table.string('requirements').notNullable();
        table.string('entryTime').notNullable();
        table.string('departureTime').notNullable();        
        table.string('workDays').notNullable();
        table.string('benefits').notNullable();
        table.foreign('companiesId').references('id').inTable('companies');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vacancies');
};
