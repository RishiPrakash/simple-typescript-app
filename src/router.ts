const koaRouter = require("koa-router");
const router = new koaRouter();
router.get('/readme', (ctx: { body: string; })=>{
    ctx.body = "This is readme."
});
module.exports = router;