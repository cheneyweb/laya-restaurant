/**
 * 游戏主界面类
 */
export default class GameView extends Laya.Scene {
    constructor() {
        super()
    }
    onEnable() {
        this.pAddEvent()
        this.gameUI.init()
        this.sceneCamera.init()
    }
    onClosed() {
    }
    onMouseDown(e) {
    }
    pAddEvent() {
        let state = Laya.store.state
        this.gameUI.on(state.EVENT_MOVESCENE, this, this.pMoveScene)
        this.sceneCamera.on(state.EVENT_UPDATEARROW, this, this.pUpDateArrow)
    }
    pMoveScene(e) {
        this.sceneCamera.moveScene(e)
    }
    pUpDateArrow(e) {
        this.gameUI.upDateArrow(e)
    }
}