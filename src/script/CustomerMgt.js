export default class CustomerMgt extends Laya.Script {

    constructor() {
        super();
        /** @prop {name:customer , tips:"顾客", type:Prefab, default:null}*/
    }

    onEnable () {
        this.mainHall = this.owner.mainHall
    }

    onDisable () {
    }

    onClick () {
        let customer = this.customer.create(),
            Customer = customer.getComponent(Laya.Script)
        customer.pos(300, 300)
        Customer.goInScene(this.mainHall)
    }
}