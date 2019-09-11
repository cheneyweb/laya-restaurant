export default class MainView extends Laya.View {

    constructor() { 
        super(); 
        this.loadScene('MainView.scene')
    }
    
    onEnable() {
        console.log(this)
    }

    onDisable() {
    }
}