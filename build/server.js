"use strict";
const koa = require("koa");
const routes = require("./router.js");
//const { koaBody } = require("koa-body");
const app = new koa();
// app.use(async (ctx: { body: string; }) => {
//     ctx.body = 'Hello World';
//   });
//app.use(koaBody());
app.use(routes.routes());
app.listen(8080, () => {
    console.log("Server is started...");
});
