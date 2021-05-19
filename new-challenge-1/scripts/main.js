var takeOff = false;
var speed = 0;
var maxThrottleCapacity = 100;
var startThrottleCapacity = 0;

document.getElementById('speed').innerHTML = speed + 'mph';
document.getElementById('throttle').innerHTML = startThrottleCapacity + '%';

function increaseThrottle() {
	takeOff = true;
		if (!(startThrottleCapacity > maxThrottleCapacity) && !(maxThrottleCapacity > 100)) {
			startThrottleCapacity++;
			document.getElementById('throttle').innerHTML = startThrottleCapacity + '%';
			speed += 10;
			document.getElementById('speed').innerHTML = speed + 'mph';
		}

}

// var passwordChecker = function (password) {
// 	var correctPassword = 1234;
// 	return password == correctPassword;
// };
// document.getElementById('checkPassword').onclick = function () {

// 	var foodCount = parseInt(document.getElementById('password').value);

// 	if (checkPassword (foodCount) ) {
// 		document.getElementById('foodSupply').innerHTML = '213 sandwiches';
// 	}
// 	else {
// 		document.getElementById('foodSupply').innerHTML = 'incorrect';
// 	}
// 	console.log('hi');
// };