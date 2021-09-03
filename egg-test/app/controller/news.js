const Controller = require('egg').Controller;

class NewsController extends Controller{
    async list() {
        const ctx = this.ctx
        const newsList = await ctx.service.news.list();
        await ctx.render('news/list.tpl',newsList)
    }
}

module.exports = NewsController
