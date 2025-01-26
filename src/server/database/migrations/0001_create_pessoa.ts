import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable('pessoa', (table) => {
      table.bigIncrements('id').primary().index();
      table.string('nome').index().notNullable();
      table.string('sobrenome').notNullable();
      table.string('email').unique().notNullable();

      table
        .bigInteger('cidadeId')
        .index()
        .references('id')
        .inTable(ETableNames.cidade)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
        .notNullable();

      table.comment('Tabela usadaa para armazenar pessoas do sistema');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.pessoa}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('pessoa').then(() => {
    console.log(`# Dropped table ${ETableNames.pessoa}`);
  });
}
