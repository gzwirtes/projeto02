import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

	await knex.schema.createTable("contador", (table) => {
		table.increments("id").primary();
		table.string("nome").notNullable();
		table.integer("quantidade").notNullable().defaultTo(0);
		table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
		table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
	})
	
}


export async function down(knex: Knex): Promise<void> {

	knex.schema.dropTableIfExists("contador");

}
