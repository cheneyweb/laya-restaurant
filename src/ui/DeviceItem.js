export default class DeviceItem extends Laya.Script {

    constructor() {
        super();
    }

    onEnable () {
        let owner = this.owner
        this.label = owner.getChildByName('label')
        this.items = [
            owner.getChildByName('level1'),
            owner.getChildByName('level2'),
            owner.getChildByName('level3'),
            owner.getChildByName('level4')
        ]
    }
    setItmes(datas){
        let items = this.items
        this.label.text = datas.label
        datas.imgSrc.forEach((v,i)=>{
            items[i].getChildByName('pic').skin = v
        })
        datas.status.forEach((v, i) => {
            let item = items[i]
            item.texture = v == 2 ? 'img/UI_menuList_item_act.png' : 'img/UI_menuList_item.png'
            item.getChildByName('lock').visible = v == 0 ? true : false
        });
    }

    onDisable () {
    }
}