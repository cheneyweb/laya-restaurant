export default class Customer extends Laya.Script {

    constructor() {
        super();
        this.scene = null
    }

    onEnable () {
        this.owner.zOrder = this.owner.y
    }

    onDisable () {
    }

    onClick () {
    }

    goInScene (scene) {
        this.scene = scene
        scene.addChild(this.owner)
        this.pNeeds()
    }
    pNeeds () {
        let pos = this.scene.haveMeal()
        console.log(pos)
        if (pos) {
            Laya.Tween.to(this.owner,{x:pos[0],y:pos[1],zOrder:pos[1]},1500)
        }
    }
}