exports.up = function(knex) {
    return knex.schema.createTable('vacancies', function(table){
        table.increments('id');
        table.integer('vacanciesCompaniesId').notNullable();
        table.string('vacancy').notNullable();
        table.string('salary').notNullable();
        table.string('requirements').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
        table.foreign('vacanciesCompaniesId').references('id').inTable('companies');
    });

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vacancies');
};
