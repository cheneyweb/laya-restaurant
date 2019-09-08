export default class GameUI extends Laya.View {

    constructor() {
        super();
    }

    onEnable () {
    }

    onDisable () {
    }
    init(){
        console.log(this)
        console.log(this.ArrowBox)
        this.ArrowBox = this.getChildByName("ArrowBox")
        console.log(this.ArrowBox)
        this.LeftArrow = this.getChildByName("LeftArrow")
        this.RightArrow = this.getChildByName("RightArrow")
        this.pAddEvent()
    }

    upDateArrow (mapNav) {
        this.LeftArrow.visible = mapNav.left
        this.RightArrow.visible = mapNav.right
    }
    pAddEvent () {
        this.LeftArrow.on("click", this, this.pSendArrowEvent, ["left"])
        this.RightArrow.on("click", this, this.pSendArrowEvent, ["right"])

    }
    pSendArrowEvent (direction) {
        console.log(direction)
        this.event(Laya.store.state.EVENT_MOVESCENE, direction)
    }
}