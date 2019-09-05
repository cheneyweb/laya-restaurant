export default class SceneCamera extends Laya.Sprite {

    constructor() {
        super();
        this.mainSence = null
    }

    onEnable() {
        this.mainSence = this.getChildByName("mainSence")
    }

    onDisable() {
    }

    moveScene(direction) {
        let state = Laya.store.state,
            designWidth = this.stage.designWidth,
            Tween = Laya.Tween,
            Ease = Laya.Ease

        switch (direction) {
            case state.EVENT_GOLEFT:
                Tween.to(this.mainSence, { x: this.mainSence.x + 750 }, 500, Ease.quadOut)
                break;
            case state.EVENT_GORIGHT:
                Tween.to(this.mainSence, { x: this.mainSence.x - 750 }, 500, Ease.quadOut)
                break;
            default:
                break;
        }
    }

}