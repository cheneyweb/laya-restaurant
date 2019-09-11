export default class Test extends Laya.Script {

    constructor() {
        super();
    }

    onEnable () {
        console.log(this.owner)
    }

    onDisable () {
    }
}