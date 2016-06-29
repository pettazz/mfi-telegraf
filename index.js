const mFi = require('ubnt-mfi');
const config = require('./config');

const controller = new mFi(config.mfi_connect);

controller.listSensors().then((sensors) => {
    sensors.forEach((sensor) => {
	var hostname = sensor.label.replace(/\s+/g, '').toLowerCase();
	console.log(`power,host=${hostname} wattage=${sensor.active_pwr},power_factor=${sensor.pf},current=${sensor.i_rms},voltage=${sensor.v_rms}`); 
    });
}, (e) => {
  //console.log("Failed:",e)
});
