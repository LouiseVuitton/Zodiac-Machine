	// //function triggered by button

function signs() {
	var day = document.getElementById("birthday").value;
	var month = document.getElementById("birthmonth").value;
	var value = day + month;
	var zodiac = value;

	let h3 = document.querySelector('h3');
	let h4 = document.querySelector('h4');

	h3.innerHTML = "Your Birthday: " + month + "/" + day;

		if (month == 1 && day >=20 || month == 2 && day <=18) {value = "Aquarius";}
		if (month == 1 && day > 31) {alert("Try Again");}
		if (month == 2 && day >=19 || month == 3 && day <=20) {value = "Pisces";}
		if (month == 2 && day > 29) {alert("Try Again");}
		if (month == 3 && day >=21 || month == 4 && day <=19) {value = "Aries";}
		if (month == 3 && day > 31) {alert("Try Again");}
		if (month == 4 && day >=20 || month == 5 && day <=20) {value = "Taurus";}
		if (month == 4 && day > 30) {alert("Try Again");}
		if (month == 5 && day >=21 || month == 6 && day <=21) {value = "Gemini";}
		if (month == 5 && day > 31) {alert("Try Again");}
		if (month == 6 && day >=22 || month == 7 && day <=22) {value = "Cancer";}
		if (month == 6 && day > 30) {alert("Try Again");}
		if (month == 7 && day >=23 || month == 8 && day <=22) {value = "Leo";}
		if (month == 7 && day > 31) {alert("Try Again");}
		if (month == 8 && day >=23 || month == 9 && day <=22) {value = "Virgo";}
		if (month == 8 && day > 31) {alert("Try Again");}
		if (month == 9 && day >=23 || month == 10 && day <=22) {value = "Libra";}
		if (month == 9 && day > 30) {alert("Try Again");}
		if (month == 10 && day >=23 || month == 11 && day <=21) {value = "Scorpio"; }
		if (month == 10 && day > 31) {alert("Try Again");}
		if (month == 11 && day >=22 || month == 12 && day <=21) {value = "Sagittarius";}
		if (month == 11 && day > 30) {alert("Try Again");}
		if (month == 12 && day >=22 || month == 1 && day <=19) {value = "Capricorn";}
		if (month == 12 && day > 31) {alert("Try Again");}
		zodiac = value;
		console.log(zodiac);
		h4.innerHTML = "Your sign is " + zodiac;

		document.getElementById('btn').onclick = function() {
            var val = document.getElementById('pic').value,
                src = 'http://webpage.com/images/' + val +'.png',
                img = document.createElement('img');

            img.src = src;
            document.body.appendChild(img);
        }
	
	
	
	function symbol () {
		let img = document.querySelector('img');
		var repimage = '<img src="';
		var zodiac = value;
	
			if (zodiac == "Aquarius") {
			repimage += 'https://github.com/LouiseVuitton/Zodiac-Machine/blob/master/img/aquarius.png">';
			} 
		else {
			repimage += 'https://github.com/LouiseVuitton/Zodiac-Machine/blob/master/img/pisces.png>';
		}
	
	
		img.innerHTML = retvalue;
	
	}

}