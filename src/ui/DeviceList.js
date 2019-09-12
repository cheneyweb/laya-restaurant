export default class DeviceList extends Laya.Script {

    constructor() {
        super();
    }

    onEnable () {
        let list = this.owner.getChildByName('restaurant'),
            data = {
                label:'烧火炉',
                imgSrc:[
                    'img/Icon_table1_1.png',
                    'img/Icon_table1_2.png',
                    'img/Icon_table1_3.png',
                    'img/Icon_table1_4.png'
                ],
                status:[1,1,2,0]
            },
            datas = [data, data, data, data, data, data]
        list.vScrollBarSkin = ""
        list.array = datas
        // item = this.Item.create()
        // console.log(item)
        // list.itemRender = this.Item
        // list.repeatX = 1
        // list.repeatY = 4
        list.renderHandler = new Laya.Handler(this, this.pUpdateItem)

    }

    onDisable () {
    }
    pUpdateItem (cell, index) {
        cell.getComponent(Laya.Script).setItmes(cell.dataSource)

    }
}