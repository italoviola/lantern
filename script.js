	window.onload = function () {

		var buttonToogle = document.getElementById("buttonToogle");
		var buttonRecharge = document.getElementById("buttonRecharge");
		var battery = document.getElementById("battery");

		var seconds = 100;
		var turn = false;
		var timer;

		buttonToogle.addEventListener("click", function(event) {
			if (turn == false) {
				decreaseBattery();	
			} else {	
				pauseBatteryConsume();
			}
		});

		buttonRecharge.addEventListener("click", function(event) {
			rechargeBattery();
		});

		function decreaseBattery() {
			buttonToogle.value = "Toogle Off";
			document.getElementById("container-battery").style.border = "1px solid #000";
			document.getElementById("battery").style.color = "#000";
			document.getElementById("body").style.backgroundColor = "white";
			timer = setInterval(function(){
				if (seconds > 0) {
					seconds--;
					battery.innerHTML = seconds + "%";
				} else {
					pauseBatteryConsume();
				}
			}, 1000);
			turn = true;
		}

		function pauseBatteryConsume() {
			buttonToogle.value = "Toogle On";
			document.getElementById("container-battery").style.border = "1px solid white";
			document.getElementById("battery").style.color = "white";
			document.getElementById("body").style.backgroundColor = "#1d2228";
			clearInterval(timer);
			turn = false;
		}

		function rechargeBattery() {
			pauseBatteryConsume();
			seconds = 100;
			battery.innerHTML = seconds + "%";
		}
	}