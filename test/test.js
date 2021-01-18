const http = require("http");
const request = require("supertest");
const postMessageScope = require("../index");

router.get(
  "/2",
  routerValidator({
    rule: {
      query: {
        id: {
          message: "自定义消息",
        },
      },
    },
  })
);
app.use(router.routes());

// app.use(async (ctx) => {
//   console.log(ctx.body, "body");
// });

app.listen(8005, () => {
  console.log("listen port 8005");
});
