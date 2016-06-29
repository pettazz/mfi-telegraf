const mFi = require('ubnt-mfi')
 
var controller = new mFi({
  host    : '192.168.1.7',
  username: 'nodejs',
  password: 'password'
})
controller.listSensors().then(function(sensors){
  console.dir(sensors)
}, function(e){
  console.log("Failed:",e)
})