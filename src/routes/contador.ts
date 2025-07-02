import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import bcrypt from 'bcrypt'

export async function contadorRoutes(app: FastifyInstance) {
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

	app.get("/tables", async () => {
    const tables = await knex("sqlite_schema").select("*")

    return tables
  });
}