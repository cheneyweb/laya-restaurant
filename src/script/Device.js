import deviceController from "../util/DeviceController";
export default class Device extends Laya.Script {
    /** @prop {name:deviceType, tips:"设施类型", type:String, default:"unSet"}*/

    constructor() {
        super();
    }

    onEnable () {
        deviceController.setDevice(this.owner.name, this)
        this.owner.zOrder = this.owner.y
    }

    onDisable () {
    }

    change (level) {
        this.owner.skin = `img/Icon_${this.deviceType}_${level}.png`
    }
}