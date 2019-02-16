// Server dependencies
const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const router = require('koa-router');

// App dependencies
const fs = require('fs');

// Other dependencies
const chalk = require('chalk');

// File Definitions
const server = 'http://localhost:3000';

app.use(serve('./public'));

app.listen(3000);
console.log(chalk.green('open', chalk.yellow(server)));

app.on('error', function (err) {
  console.log(chalk.red(err.stack));
});
