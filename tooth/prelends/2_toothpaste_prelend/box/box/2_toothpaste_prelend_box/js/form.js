var form = document.querySelector('.all-form')
var minutes = document.getElementsByClassName('all-form__min');
var seconds = document.getElementsByClassName('all-form__sec');
var isStart = false;

var startCount = function (min, sec) {
	var date = new Date();
	var count = 0;
	var setMinutes = 10;
	var setSeconds = 0;
	date.setMinutes(setMinutes);
	date.setSeconds(setSeconds);
	min.textContent = zero(date.getMinutes());
	sec.textContent = zero(date.getSeconds());

	var interval = setInterval(counter, 1000);

	function counter() {
		count++;
		var liveDate = new Date();
		liveDate.setMinutes(date.getMinutes());
		liveDate.setSeconds(date.getSeconds() - count);
		min[0].textContent = zero(liveDate.getMinutes());
		sec[0].textContent = zero(liveDate.getSeconds());
		if (min[0].textContent === '00' && sec[0].textContent === '00') {
			clearInterval(interval);
		}
	}

	function zero(num) {
		return num.toString().length === 1 ? '0' + num : num;
	}
};

var isOk = function() {
	if (window.pageYOffset >= form.offsetTop - window.innerHeight && !isStart) {
		startCount(minutes, seconds);
		isStart = true
	}
};

window.addEventListener('scroll', isOk)
