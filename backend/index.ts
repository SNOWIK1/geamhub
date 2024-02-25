import Fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import db from "./db";
import "dotenv/config"
import { getProducts } from "./db/models/product";

const fastify = Fastify({ logger: true });
const PORT: number = parseInt(process.env.PORT ?? "3000")


fastify.get("/", async (req: FastifyRequest, rep: FastifyReply) => {
    console.log(req)
    return await getProducts()
    rep.status(200)
})

fastify.listen({ port: PORT}, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(address)
});
