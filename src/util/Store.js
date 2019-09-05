/**
 * 网络请求类
 */
class Axios {
    constructor() {
        this.xhr = new Laya.HttpRequest()
        this.xhr.http.timeout = 10000
        this.domain = 'http://localhost:3636'
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
        user: {}
    },
    actions: {
        async login(data) {
            let res = await store.axios.post('/xserver/player/login', data)
            console.log(res)
        },
        async getUser(data) {
            let res = await store.axios.get(`/xnosql/player/query?username=${data.username}`)
            console.log(res)
        }
    }
})

export default store