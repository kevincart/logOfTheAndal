const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const router = require('koa-router');

const fs = require('fs');

var readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

app.use(async ctx => {
  ctx.body = readFileThunk;
});

app.listen(3000);
console.log('open http://localhost:3000');

app.on('error', function (err) {
  console.log(err.stack);
});
