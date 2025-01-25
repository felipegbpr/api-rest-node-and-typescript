import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable('cidade', (table) => {
      table.bigIncrements('id').primary().index();
      table.string('nome', 150).checkLength('<=', 150).index().notNullable();

      table.comment('Tabela usadaa para armazenar cidades do sistema');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.cidade}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cidade').then(() => {
    console.log(`# Dropped table ${ETableNames.cidade}`);
  });
}
