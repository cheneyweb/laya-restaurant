/**
 * 设施外观控制
 */
class DeviceController{
  constructor(){
    this.deviceList = {}
  }
  setDevice(name,clas){
    this.deviceList[name] = clas
  }
  changeDevice(name,level){
    this.deviceList[name].change(level)
  }
}

const deviceController = new DeviceController()

export default deviceController
