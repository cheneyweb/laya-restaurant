export default class MainHall extends Laya.Box {

    constructor() {
        super();
        this.foodTable = [
            {
                usable: true,
                pos: [0, 0]
            },
            {
                usable: true,
                pos: [0, 0]
            },
            {
                usable: true,
                pos: [0, 0]
            },
            {
                usable: true,
                pos: [0, 0]
            },
            {
                usable: true,
                pos: [0, 0]
            },
            {
                usable: true,
                pos: [0, 0]
            },
        ]
    }

    onEnable () {
        this.pInitFoodPos()
    }

    onDisable () {
    }

    haveMeal () {
        let foodTable = this.foodTable
        for (let i = 0; i < foodTable.length; i++) {
            if (foodTable[i].usable) {
                this.foodTable[i].usable = false
                return  foodTable[i].pos
            }
        }
        return false
    }

    pInitFoodPos () {
        this.foodTable.forEach((v, i) => {
            let table = this.getChildByName(`table${i + 1}`)
            v.pos = [table.x, table.y - 50]
        })
        console.log(this.foodTable)
    }
}