import deviceController from "../util/DeviceController";
export default class GameUI extends Laya.View {

    constructor() {
        super();
        this.loadScene('GameUI.scene')
    }

    onEnable () {
    }

    onDisable () {
    }
    init () {
        this.pAddEvent()
    }

    upDateArrow (mapNav) {
        this.leftArrow.visible = mapNav.left
        this.rightArrow.visible = mapNav.right
    }
    pAddEvent () {
        this.leftArrow.on('click', this, this.pSendArrowEvent, ['left'])
        this.rightArrow.on('click', this, this.pSendArrowEvent, ['right'])
        this.menu.on('click', this, this.pShowMenu)

    }
    pSendArrowEvent (direction) {
        this.event(Laya.store.state.EVENT_MOVESCENE, direction)
    }
    pShowMenu () {
        console.log('menuClick')
        deviceController.changeDevice('table1',2)
    }
}