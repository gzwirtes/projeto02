import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import bcrypt from 'bcrypt'

export async function contadorRoutes(app: FastifyInstance) {
	app.get("/", async () => {
		const contador = await knex("contador").select()

		return { contador }
	});

	app.get("/:id", async (request) => {
		const getContadorParamsSchema = z.object({
			id: z.string(),
		})

		const { id } = getContadorParamsSchema.parse(request.params)

		const contador = await knex("contador").select().where("id", id).first()

		return { contador }
	});

	app.get("/summary", async (request) => {
		const summary = await knex("contador").count('id', { as: 'total' }).first()

		return { summary }
	});

	app.post("/", async (request, reply) => {
		const createContadorBodySchema = z.object({
			nome: z.string(),
			senha: z.string().min(6),
		})

		const { nome, senha } = createContadorBodySchema.parse(request.body)

		const senhaCriptografada = await bcrypt.hash(senha, 6)

		await knex('contador').insert({
			nome,
			senha: senhaCriptografada,
		})

		return reply.status(201).send()
	});
}