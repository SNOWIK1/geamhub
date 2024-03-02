import Fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import { fastifyView, FastifyViewOptions } from "@fastify/view";
import { fastifyStatic, FastifyStaticOptions } from "@fastify/static";

import path from "path";

export const fastify = Fastify();

fastify.register(fastifyView, {
  engine: {
    ejs: require("ejs"),
  },
  root: path.join(__dirname, "..", "frontend", "pages"),
});

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "..", "frontend"),
});