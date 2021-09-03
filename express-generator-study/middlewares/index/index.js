module.exports.transmission = function () {
  return (req, res, next) => {
    const id = 'id'
    res.id = id
    next()
  }
}

module.exports.reception = function () {
  return (req, res, next) => {
    res.id = res.id + 123456789
    next()
  }
}

module.exports.send = function () {
  return (req, res, next) => {
    res.render('index', {title: `res.render${res.id}`});
  }
}

exports.handleItemInfo = function () {
  return (req, res, next) => {
    res.id = 'resId'
    next()
  }
}

exports.itemInfo = function () {
  return (req, res) => {
    const order = [
      {
        orderId: '',
        goodsIds: [{goodsId: 'phoneX'}, {goodsId: 1}],
        buyerId: 'zhangsan',
        goodsNum: 10
      },
      {
        orderId: '',
        goodsIds: [{goodsId: 1}, {goodsId: 2}],
        buyerId: '李四',
        goodsNum: 10
      },
      {
        orderId: '',
        goodsIds: [{goodsId: 'phoneX'}, {goodsId: 'phoneX'}],
        buyerId: 'zhangsan',
        goodsNum: 10
      }
    ]
    let b = []
    order.map((item) => {
      let phone = item.goodsIds.some(ite => {
        if (ite.goodsId === 'phoneX') {
         return ite
        }
      })
      if (phone && item.buyerId === 'zhangsan' && item.goodsNum > 3) {
        b.push(item)
      }
    })
    console.log(b)
    const title = `res.render${res.id} ----- ${b}`
    res.render('index', {title})
  }
}