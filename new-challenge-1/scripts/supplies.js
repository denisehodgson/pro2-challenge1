var passwordChecker = function (password) {
	var correctPassword = whyDoesThisNotWork;
	return password == correctPassword;
};
document.getElementById('checkPassword').onclick = function () {

	var foodCount = parseInt(document.getElementById('password').value);

	if (checkPassword (foodCount) ) {
		document.getElementById('foodSupply').innerHTML = '213 sandwiches';
	}
	else {
		document.getElementById('foodSupply').innerHTML = 'incorrect';
	}
};

var waterSupply = 667;

document.getElementById('waterAmount').innerHTML = waterSupply + ' water packets';

function grabWater () {
	if (waterSupply > 0) {
		waterSupply --;
		document.getElementById('waterAmount').innerHTML = waterSupply + ' water packets';
	}
}