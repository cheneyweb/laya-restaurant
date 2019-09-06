export default class GameUI extends Laya.Box {

    constructor() {
        super();
    }

    onEnable () {
        this.mapArrow = this.getChildByName("mapArrow"),
        this.leftArr = this.mapArrow.getChildByName("leftArr"),
        this.rightArr = this.mapArrow.getChildByName("rightArr")
        this.pAddEvent()
    }

    onDisable () {
    }

    upDateArrow (mapNav) {
        this.leftArr.visible = mapNav.left
        this.rightArr.visible = mapNav.right
    }
    pAddEvent () {
        this.leftArr.on("click", this, this.pSendArrowEvent, ["left"])
        this.rightArr.on("click", this, this.pSendArrowEvent, ["right"])

    }
    pSendArrowEvent (direction) {
        console.log(direction)
        this.event(Laya.store.state.EVENT_MOVESCENE, direction)
    }
}