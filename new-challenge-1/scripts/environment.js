// var takeOff = false;
// var distanceTravelled = 0;
// var minimumGravity = 0;
// var earthGravity = 90;

// document.getElementById('distance').innerHTML = speed + 'miles';
// document.getElementById('gravity').innerHTML = earthGravity + '%';

// function decreaseGravity() {
// 	takeOff = true;
// 		if (!(earthGravity > minimumGravity) && !(minimumGravity > 100)) {
// 			earthGravity++;
// 			document.getElementById('gravity').innerHTML = earthGravity + '%';
// 			distanceTravelled += 10;
// 			document.getElementById('distance').innerHTML = distanceTravelled + 'miles';
// 		}

// }

var takeOff = false;
var startGravity = 90;
var startDistance = 0;
var maxDistance = 33900000;

document.getElementById('gravity').innerHTML = startGravity + '%';
document.getElementById('distance').innerHTML = startDistance + ' miles';

function decreaseGravity() {
	takeOff = true;
		if (!(startDistance > maxDistance) && !(maxDistance > 33900000)) {
			startDistance++;
			document.getElementById('distance').innerHTML = startDistance + ' miles';
			distanceTravelled += 10000;
			document.getElementById('gravity').innerHTML = startGravity + '%';
		}

}