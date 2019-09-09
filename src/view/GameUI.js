export default class GameUI extends Laya.View {

    constructor() {
        super();
    }

    onEnable () {
    }

    onDisable () {
    }
    init(){
        this.arrowBox = this.getChildByName("arrowBox")
        this.leftArrow = this.arrowBox.getChildByName("leftArrow")
        this.rightArrow = this.arrowBox.getChildByName("rightArrow")
        this.pAddEvent()
    }

    upDateArrow (mapNav) {
        this.leftArrow.visible = mapNav.left
        this.rightArrow.visible = mapNav.right
    }
    pAddEvent () {
        this.leftArrow.on("click", this, this.pSendArrowEvent, ["left"])
        this.rightArrow.on("click", this, this.pSendArrowEvent, ["right"])

    }
    pSendArrowEvent (direction) {
        console.log(direction)
        this.event(Laya.store.state.EVENT_MOVESCENE, direction)
    }
}