const router = require("koa-router")();
const send = require("koa-send");
const InitPage = require("../core/createForm");

router.get("/", async (ctx, next) => {
  await ctx.render("template");
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
  // const path = 'public/dwonloadFiles/index.jsx'
  // ctx.attachment(path);
  // await send(ctx, path);
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

router.get("/error", async (ctx, next) => {
  await ctx.render("template");
});

router.post("/download", async (ctx) => {
  // console.log('hello',ctx.request.body);
  let data = ctx.request.body;
  /**
   * fn(){}
   * params 配置表单参数
   * return 生成压缩包路径
   */
  const fileName = await InitPage(data);
  console.log("fileName", fileName);
  const path = "public/dwonloadFiles/" + fileName;
  console.log("path", path);
  ctx.attachment(path);
  await send(ctx, path);
  // ctx.body = {
  //   title: 'is ok'
  // }
});

module.exports = router;
