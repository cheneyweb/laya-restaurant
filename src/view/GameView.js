/**
 * 游戏主界面类
 */
export default class GameView extends Laya.Scene {
    constructor() {
        super()
        this.gameUI = null
        this.sceneCamera = null
    }
    onEnable() {
        this.gameUI = this.getChildByName("GameUI")
        this.sceneCamera = this.getChildByName("sceneCamera")
        this.pAddEvent()
    }
    onClosed() {
    }
    onMouseDown(e) {
    }
    pAddEvent(){
        let state = Laya.store.state
        this.gameUI.on(state.EVENT_GOLEFT,this,this.pMoveScene,[state.EVENT_GOLEFT])
        this.gameUI.on(state.EVENT_GORIGHT,this,this.pMoveScene,[state.EVENT_GORIGHT])
    }
    pMoveScene(e){
        this.sceneCamera.moveScene(e)
    }
}