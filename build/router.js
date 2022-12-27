"use strict";
const koaRouter = require("koa-router");
const router = new koaRouter();
router.get('/readme', (ctx) => {
    ctx.body = "This is readme.";
});
module.exports = router;
