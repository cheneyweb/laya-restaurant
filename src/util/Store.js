/**
 * 网络请求类
 */
class Axios {
    constructor() {
        this.xhr = new Laya.HttpRequest()
        this.xhr.http.timeout = 10000
        this.domain = 'http://restaurant.xserver.top'
    }
    get(url) {
        return new Promise((resolve, reject) => {
            this.xhr.on(Event.COMPLETE, this, (e) => {
                resolve(e)
            })
            this.xhr.on(Event.ERROR, this, (error) => {
                console.error(error)
                reject(error)
            })
            this.xhr.send(`${this.domain}${url}`, '', 'get', 'json')
        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            this.xhr.on(Laya.Event.COMPLETE, this, (e) => {
                resolve(e)
            })
            this.xhr.on(Laya.Event.ERROR, this, (error) => {
                console.error(error)
                reject(error)
            })
            this.xhr.send(`${this.domain}${url}`, JSON.stringify(data), 'post', 'json', ["content-type", "application/json;charset=UTF-8"])
        })
    }
}
/**
 * 状态管理类
 */
class Store {
    constructor(inparam) {
        this.state = inparam.state
        this.actions = inparam.actions
        this.axios = new Axios()
    }

    pGetItem(key) {
        return JSON.parse(Laya.LocalStorage.getItem(key))
    }
    pSetItem(key, obj) {
        return Laya.LocalStorage.setItem(key, JSON.stringify(obj))
    }
}

/**
 * 状态管理实例
 */
const store = new Store({
    state: {
        player: { nickname: 'cheney' },
        EVENT_GOLEFT:"goleft",
        EVENT_GORIGHT:"goright"
    },
    actions: {
        // 玩家登录
        async login() {
            let player = store.pGetItem('player') || store.state.player
            let res = await store.axios.post('/xserver/player/login', player)
            console.log(res)            
            store.state.player = res
            store.pSetItem('player', res)
        },
        // 上传存档
        async upload() {
            let player = store.pGetItem('player')
            if (player) {
                player.nickname = 'cheney2'
                let res = await store.axios.post(`/xnosql/player/update`, player)
                console.log(res)
            }
        }
    }
})

// 每隔10秒上传存档
setInterval(() => {
    Laya.store.actions.upload()
}, 10000)

export default store