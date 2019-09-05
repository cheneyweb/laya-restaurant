// const config = require('config')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
const Router = require('koa-router')
const router = new Router()

router.post('/login', async (ctx, next) => {
    let inparam = ctx.request.body
    let mongodb = global.mongodb
    ctx.body = { err: false }
    let player
    // 查询玩家是否存在，不存在则自动创建
    if (inparam._id) {
        player = await mongodb.collection('player').findOne({ _id: inparam._id })
        if (!player) {
            delete inparam._id
            res = await mongodb.collection('player').insertOne(inparam)
            player = { ...inparam, _id: res.insertedId }
        }
    } else {
        let res = await mongodb.collection('player').insertOne(inparam)
        player = { ...inparam, _id: res.insertedId }
    }
    ctx.body = player
})

module.exports = router