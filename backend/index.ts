import Fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import db from "./db";
import "dotenv/config"
import { ProductModel } from "./db/models/product";
import { UserModel } from "./db/models/user";
import { AppTypes } from "./types";

const fastify = Fastify();
const PORT: number = parseInt(process.env.PORT ?? "3000")


fastify.get("/", async (req: FastifyRequest, rep: FastifyReply) => {
    console.log(req.hostname)
    rep.status(200)
    rep.send("ok")
})

fastify.listen({ port: PORT}, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(address)
});
