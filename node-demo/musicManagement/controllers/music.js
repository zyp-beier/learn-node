const formidable = require('formidable');
const config = require('../config')
const path = require('path')
const qs = require('querystring')
let storage = [
  {
    id: 1,
    title: '天下',
    singer: '张杰',
    music: '张杰——天下.mp3',
    poster: '1.jpg'
  },
  {
    id: 2,
    title: '天下',
    singer: '张杰',
    music: '张杰——天下.mp3',
    poster: '1.jpg'
  }
]
// 首页 音乐列表
exports.showIndex = function(req,res) {
  res.render('index',{
    title: '首页',
    musicList: storage
  })
}
// 
exports.showAdd = function(req,res) {
  res.render('add',{
    title: '添加音乐'
  })
}
// 添加音乐
exports.doAdd = function(req, res) {
  let form = new formidable.IncomingForm()
  form.uploadDir = config.uploadPath
  form.keepExtensions = true
  form.parse (req,function(err,fields,files) {
    if(err) {
      return res.end(err.message)
    }
    let {title,singer} = fields
    let music = path.basename(files.music.path)
    let poster = path.basename(files.poster.path)
    let id = 0
    storage.forEach(function(item) {
      if(item.id > id) {
        id = item.id
      }
    })
    storage.push({
      id: id + 1,
      title,
      singer,
      music,
      poster
    })
    res.writeHead(302,{
      'Location': 'http://127.0.0.1:8400/index.html'
    })
    res.end()
  })
}
// 显示编辑音乐
exports.showEdit = function(req,res) {
  let id = req.query.id
  let music = {}
  storage.forEach((item) => {
    if(+item.id === +id) {
      music = item
    }
  })
  res.render('edit',{
    title: '编辑音乐',
    music
  })
}
// 编辑音乐
exports.doEdit = function(req,res) {
  let id = req.query.id
  let data = ''
  req.on('data',function(chunk) {
    data += chunk
  })
  req.on('end',function() {
    let postBody = qs.parse(data)
    console.log(postBody);
    let music_index = 0
    storage.forEach((item,index) => {
      if(+item.id === +id) {
        music_index = index
      }
    })
    storage[music_index].title = postBody.title
    storage[music_index].singer = postBody.singer
    res.writeHead(302,{
      'Location': 'http://127.0.0.1:8400/index.html'
    })
    res.end()
  })
}
// 删除音乐
exports.doRemove = function(req,res) {
  let id = req.query.id
  let music_index = 0
  storage.forEach((item,index) =>  {
    if(+item.id === +id) {
      music_index = index
    }
  })
  storage.splice(music_index, 1)
  res.writeHead(302,{
    'Location': 'http://127.0.0.1:8400/index.html'
  })
  res.end()
}