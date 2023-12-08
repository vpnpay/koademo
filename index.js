var Koa = require('koa');
const catModel = require('./model/model');
var bodyParser = require('koa-bodyparser');
var app = new Koa();
const Router = require('koa-router');
const router = new Router();
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

router.post('/cats',async(ctx,next)=>{
  let cats = await catModel.find();  
  ctx.body = cats;  
});
router.post('/addCat',async(ctx,next)=>{
  let cat = await catModel.create(ctx.request.body);  
  ctx.body = cat;  
});
router.post('/delCat',async(ctx,next)=>{
  let id = ctx.request.body.id;
  let cat = await catModel.deleteOne({ _id: id }); 
  ctx.body = cat;  
});
router.post('/updateCat',async(ctx,next)=>{
  let id = ctx.request.body.id;
  let name = ctx.request.body.name;  
  let cat = await catModel.updateOne({ _id: id }, { name });  
  ctx.body = cat;  
});

app.listen(3000)