export default class GameUI extends Laya.Box {

    constructor() {
        super();
    }

    onEnable() {
        this.pAddEvent()
    }

    onDisable() {
    }

    pAddEvent() {
        let state = Laya.store.state,
            mapArrow = this.getChildByName("mapArrow"),
            leftArr = mapArrow.getChildByName("leftArr"),
            rightArr = mapArrow.getChildByName("rightArr")
        leftArr.on("click",this,this.pSendEvent,[state.EVENT_GOLEFT])
        rightArr.on("click",this,this.pSendEvent,[state.EVENT_GORIGHT])
        
    }
    pSendEvent(type){
        console.log(type)
        this.event(type)
    }
}