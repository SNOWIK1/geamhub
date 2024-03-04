import { FastifyRequest, FastifyReply } from "fastify";

import {fastify} from "./init";
import path from "path";
import db from "./db";
import "dotenv/config"
import { ProductModel } from "./db/models/product";
import { UserModel } from "./db/models/user";
import { AppTypes } from "./types";


const PORT: number = parseInt(process.env.PORT ?? "3000")

fastify.get("/", async (req: FastifyRequest, rep: FastifyReply) => {
    console.log(req.hostname)
    return rep.view("/catalog.ejs", {})
})

fastify.listen({ port: PORT}, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(address)
});
