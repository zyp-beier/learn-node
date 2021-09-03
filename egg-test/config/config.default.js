exports.keys = 'zyp';

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping:{
        '.tpl': 'nunjucks',
    }
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

exports.pobot = {
    ua: [
        /Baiduspider/i,
    ]
}
