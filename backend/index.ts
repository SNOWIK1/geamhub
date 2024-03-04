import { FastifyRequest, FastifyReply } from "fastify";

import { fastify } from "./init";
import path from "path";
import db from "./db";
import "dotenv/config";
import { ProductModel } from "./db/models/product";
import { UserModel } from "./db/models/user";
import { AppTypes } from "./types";
import { AppInterfaces } from "./interfaces";

import { chunk } from "lodash-es";

const PORT: number = parseInt(process.env.PORT ?? "3000");

const TEST_OBJ = {
  id: BigInt("13124"),
  name: "AVATARAKAN",
  isPrivate: 0,
  isDiscussion: 0,
  mainChannel: null,
  targetAudience: 0,
  lang: "ru",
  numberOfUsers: 198,
  type: AppTypes.ProductType.CHAT,
  contentType: AppTypes.ProductContentType.NULL,
  createdAt: Date.now(),
};

const str = "gfdhgfhgfh";
const arr: AppInterfaces.IProduct[] = [];

for (const ch of str) {
  const rand = parseInt(Math.random().toFixed(4).split(".").join(""));

  // Создаем новый объект на каждой итерации, чтобы сохранить уникальные значения
  const newTestObj = { ...TEST_OBJ, numberOfUsers: rand };
  arr.push(newTestObj);
}

// const RESPONSE_ARR = chunk(arr, 5)

interface MyRequest extends FastifyRequest {
  crit?: string,
  sortby?: string
}

fastify.get("/", async (req: FastifyRequest, rep: FastifyReply) => {
  console.log(req.hostname);
  return rep.view("/index.ejs", {});
});

fastify.get("/catalog", async (req: FastifyRequest, rep: FastifyReply) => {
  console.log(req.hostname);
  const q = req.query as MyRequest;
  console.log(q);
  if (q.crit && q.sortby) {
    if (q.sortby == "asc") return rep.view("/catalog.ejs", {
      products: arr.sort((a, b) => a.numberOfUsers - b.numberOfUsers),
    });
    if (q.sortby == "desc") return rep.view("/catalog.ejs", {
      products: arr.sort((a, b) => b.numberOfUsers - a.numberOfUsers),
    });
  } else return rep.view("/catalog.ejs", { products: arr });
});

fastify.listen({ port: PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(address);
});
