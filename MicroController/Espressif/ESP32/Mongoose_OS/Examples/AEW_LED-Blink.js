// Firmware  : Mongoose OS for ESP32
	
// http://esp8266iot.blogspot.in/
// http://aruneworld.blogspot.com/
// Tested By 	: Arun(20170430)
// Example Name : AEW_LED-Blink.js

//*******************************//


// Load Mongoose OS API
load('api_timer.js');
load('api_gpio.js');

// Blink 26th pin LED every second
let PIN = 26;

GPIO.set_mode(PIN, GPIO.MODE_OUTPUT);
Timer.set(1000 /* milliseconds */, true /* repeat */, function(pin) {
  let value = GPIO.toggle(pin);
  print(value ? 'Tick' : 'Tock');
}, PIN);
