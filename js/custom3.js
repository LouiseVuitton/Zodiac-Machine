var todaysReading = {
	"Aries":"It is perhaps true that it takes two to make a relationship work, but only one to ruin it. But both still hold a responsibility. <a href=\"https://horoscopes-and-astrology.com/Aries\" alt=\"Aries\" target=\"_blank\"> <i>Read more...</i></a>",
	"Taurus":"It's time to roll up your sleeves and get cracking. Stop talking about it and start acting - you have plenty of work to do. <a href=\"https://horoscopes-and-astrology.com/Taurus\" alt=\"Taurus\" target=\"_blank\"> <i>Read more...</i></a>",
	"Gemini":"It's not what you say or what you do that's important. What's interesting is the difference between your words and your actions. <a href=\"https://horoscopes-and-astrology.com/Gemini\" alt=\"Gemini\" target=\"_blank\"> <i>Read more...</i></a>",
	"Cancer":"You may have a feeling that you're not getting the support you need at home, which hurts. Have you tried talking about it? <a href=\"https://horoscopes-and-astrology.com/Cancer\" alt=\"Cancer\" target=\"_blank\"> <i>Read more...</i></a>",
	"Leo":"Strong people can seem intimidating to others - not on purpose, but because that's just how they are. Have you experienced this? <a href=\"https://horoscopes-and-astrology.com/Leo\" alt=\"Leo\" target=\"_blank\"> <i>Read more...</i></a>",
	"Virgo":"The more you get know yourself, the more you will understand your relations to other people. This will benefit you greatly. <a href=\"https://horoscopes-and-astrology.com/Virgo\" alt=\"Virgo\" target=\"_blank\"> <i>Read more...</i></a>",
	"Libra":"Someone may try to get you to go along with a fancy idea that most of all sounds like hot air to you. Decline clearly and firmly. <a href=\"https://horoscopes-and-astrology.com/Libra\" alt=\"Libra\" target=\"_blank\"> <i>Read more...</i></a>",
	"Scorpio":"You might have experienced a minor defeat at work, and this could have deprived you of your motivation. Try and recover it. <a href=\"https://horoscopes-and-astrology.com/Scorpio\" alt=\"Scorpio\" target=\"_blank\"> <i>Read more...</i></a>",
	"Sagittarius":"Today is a day for going at full throttle, considering how much is at stake. If you play your cards right, you will win. <a href=\"https://horoscopes-and-astrology.com/Sagittarius\" alt=\"Sagittatius\" target=\"_blank\"> <i>Read more...</i></a>",
	"Capricorn":"Don’t ever be too small a person to share the joy of others. The fact that you want the same thing doesn’t change that. <a href=\"https://horoscopes-and-astrology.com/Capricorn\" alt=\"Capricon\" target=\"_blank\"> <i>Read more...</i></a>",
	"Aquarius":"You might not have seen a friend of yours for a very long time by now. Instead of wondering why, give him or her a call! <a href=\"https://horoscopes-and-astrology.com/Aquarius\" alt=\"Aquarius\" target=\"_blank\"> <i>Read more...</i></a>",
	"Pisces":"You no longer have to understand why someone acts the way that he or she does- as long as you are willing to accept it. <a href=\"https://horoscopes-and-astrology.com/Pisces\" alt=\"Pisces\" target=\"_blank\"> <i>Read more...</i></a>"
};


//function triggered by button
function signs() {
	var day = document.getElementById("birthday").value;
	var month = document.getElementById("birthmonth").value;
	var symbol = day + month;
	var zodiac = symbol;

	let h3 = document.querySelector('h3');
	let h4 = document.querySelector('h4');

	h3.innerHTML = "Your Birthday: " + month + "/" + day;

		if (month == 1 && day >=20 || month == 2 && day <=18) {
			symbol = "Aquarius";
			document.getElementById("symbol").src = "img/aquarius.png";
			x = todaysReading.Aquarius;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 2 && day >=19 || month == 3 && day <=20) {
			symbol = "Pisces";
			document.getElementById("symbol").src = "img/pisces.png";
			x = todaysReading.Pisces;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 3 && day >=21 || month == 4 && day <=19) {
			symbol = "Aries";
			document.getElementById("symbol").src = "img/aries.png";
			x = todaysReading.Aries;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 4 && day >=20 || month == 5 && day <=20) {
			symbol = "Taurus";
			document.getElementById("symbol").src = "img/taurus.png";
			x = todaysReading.Taurus;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 5 && day >=21 || month == 6 && day <=21) {
			symbol = "Gemini";
			document.getElementById("symbol").src = "img/gemini.png";
			x = todaysReading.Gemini;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 6 && day >=22 || month == 7 && day <=22) {
			symbol = "Cancer";
			document.getElementById("symbol").src = "img/cancer.png";
			x = todaysReading.Cancer;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 7 && day >=23 || month == 8 && day <=22) {
			symbol = "Leo";
			document.getElementById("symbol").src = "img/leo.png";
			x = todaysReading.Leo;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 8 && day >=23 || month == 9 && day <=22) {
			symbol = "Virgo";
			document.getElementById("symbol").src = "img/virgo.png";
			x = todaysReading.Virgo;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 9 && day >=23 || month == 10 && day <=22) {
			symbol = "Libra";
			document.getElementById("symbol").src = "img/libra.png";
			x = todaysReading.Libra;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 10 && day >=23 || month == 11 && day <=21) {
			symbol = "Scorpio";
			document.getElementById("symbol").src = "img/scorpio.png";
			x = todaysReading.Scorpio;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 11 && day >=22 || month == 12 && day <=21) {
			symbol = "Sagittarius";
			document.getElementById("symbol").src = "img/sagittarius.png";
			x = todaysReading.Sagittarius;
			document.getElementById("daily-horoscope").innerHTML = x;
		} else if (month == 12 && day >=22 || month == 1 && day <=19) {
			symbol = "Capricorn";
			document.getElementById("symbol").src = "img/capricorn.png";
			x = todaysReading.Capricorn;
			document.getElementById("daily-horoscope").innerHTML = x;
		}

		zodiac = symbol;
		console.log(zodiac);
		h4.innerHTML = "Your sign is " + zodiac;
}