const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const router = require('koa-router');

const fs = require('fs');

app.use(serve('./public'));

app.listen(3000);
console.log('open http://localhost:3000');

app.on('error', function (err) {
  console.log(err.stack);
});
