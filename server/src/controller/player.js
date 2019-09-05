// const config = require('config')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
const Router = require('koa-router')
const router = new Router()

router.post('/login', async (ctx, next) => {
    let inparam = ctx.request.body
    let mongodb = global.mongodb
    ctx.body = { err: false }
    // 查询玩家是否存在，不存在则自动创建
    let player = await mongodb.collection('player').findOne({ nickname: inparam.nickname })
    if (!player) {
        await mongodb.collection('player').insertOne(inparam)
        player = inparam
    }
    ctx.body = player
})

module.exports = router