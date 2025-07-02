import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import { contadorRoutes } from "./routes/contador";

const app = fastify()

app.register(contadorRoutes, {
	prefix: "/contador",
})

app.listen({
	port: env.PORT,
}).then(() => {
	console.log("Server is running on http://localhost:"+ env.PORT);
})