const Koa = require('koa');
const path = require('path');
const index = require('./view/index.html');
const app = new Koa();

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./views/index.html');
};

app.use(main);

if (process.env.NODE_ENV === 'test') {
  module.exports = app.callback();
} else {
  app.listen(3000);
  console.log('open http://localhost:3000');
}

app.on('error', function (err) {
  console.log(err.stack);
});
