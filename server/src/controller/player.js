// const config = require('config')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
const Router = require('koa-router')
const router = new Router()

router.post('/login', async (ctx, next) => {
    let player = ctx.request.body
    let mongodb = global.mongodb
    ctx.body = { err: false }
    // 查询玩家是否存在，不存在则自动创建
    if (player._id) {
        player = await mongodb.collection('player').findOne({ _id: player._id })
        if (!player) {
            delete player._id
            let res = await mongodb.collection('player').insertOne(player)
            console.log(res)
        }
    } else {
        let res = await mongodb.collection('player').insertOne(player)
        console.log(res)
    }
    ctx.body = player
})

module.exports = router