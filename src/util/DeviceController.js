/**
 * 设施外观控制
 */
class DeviceController{
  constructor(){
    this.deviceList = {}
  }
  setDevice(name,clas){
    this.deviceList[name] = clas
    console.log(this.deviceList)
  }
  changeDevice(name,level){
    this.deviceList[name].change(level)
  }
}

const deviceController = new DeviceController()

export default deviceController
