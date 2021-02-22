import koaEjs from 'koa-ejs';
import path from 'path';

export async function devIndex(ctx, next) {
  if (ctx.url === '/' || ctx.url === '/index.html') {
    await ctx.render('index', {});
  } else {
    await next();
  }
}

export async function esjRender(context, next) {
  koaEjs(context.app, {
    root: 'tools/view',
    layout: 'layout',
    viewExt: 'html',
    async: true,
    cache: false,
    debug: false,
    writeResp: true,
  });
  await next();
}
