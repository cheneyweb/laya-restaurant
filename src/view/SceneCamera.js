export default class SceneCamera extends Laya.Sprite {

    constructor() {
        super();
        this.mainSence = null
        this.mapData = [        //0为不开放不可进入，1为可进入
            [1, 1],
            [0, 0]
        ]
        this.mapPos = [0, 0]    //[0]为1维层级，[1]为2维索引
        this.mapNav = { left: false, right: false, top: false, bottom: false }
        this.onMove = false     //是否正在移动场景
    }
    onEnable () {
        this.mainSence = this.getChildByName("mainSence")
    }
    onDisable () {
    }
    init () {
        this.pUpdateMapNav()
    }
    moveScene (direction) {
        let state = Laya.store.state,
            designWidth = this.stage.designWidth,
            Tween = Laya.Tween,
            Ease = Laya.Ease,
            Handler = Laya.Handler

        if (this.onMove) {
            return
        }
        this.onMove = true
        switch (direction) {
            case "left":
                if (!this.mapNav.left) {
                    this.onMove = false
                    return
                }
                this.mapPos[1] -= 1
                Tween.to(this.mainSence, { x: this.mainSence.x + 800 }, 500, Ease.quadOut, Handler.create(this, this.pMoveEnd))
                break;
            case "right":
                if (!this.mapNav.right) {
                    this.onMove = false
                    return
                }
                this.mapPos[1] += 1
                Tween.to(this.mainSence, { x: this.mainSence.x - 800 }, 500, Ease.quadOut, Handler.create(this, this.pMoveEnd))
                break;
            default:
                break;
        }
    }
    pMoveEnd () {
        this.onMove = false
        this.pUpdateMapNav()
    }
    pUpdateMapNav () {
        let mapData = this.mapData, mapPos = this.mapPos
        this.mapNav = {
            left: Boolean(mapData[mapPos[0]][mapPos[1] - 1]),
            right: Boolean(mapData[mapPos[0]][mapPos[1] + 1]),
            top: Boolean(mapData[mapPos[0] - 1] && mapData[mapPos[0] - 1][mapPos[1]]),
            bottom: Boolean(mapData[mapPos[0] + 1] && mapData[mapPos[0] + 1][mapPos[1]])
        }
        console.log(this.mapNav)
        this.event(Laya.store.state.EVENT_UPDATEARROW, this.mapNav)
    }

}