import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

	await knex.schema.alterTable("contador", (table) => {
		table.string("senha").notNullable()
	})

}



export async function down(knex: Knex): Promise<void> {

	await knex.schema.alterTable("contador", (table) => {
		table.dropColumn("senha")
	})

}
