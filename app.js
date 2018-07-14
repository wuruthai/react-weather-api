var api = "https://api.apixu.com/v1/current.json?key=5d63b974afd2451eaa6220227180801&q=";

$( document ).ready( function () {
	if ( navigator.geolocation ) {
		navigator
			.geolocation
			.getCurrentPosition( function ( position ) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				getWeather();
			} );
	} else {
		alert( "Change your Browser!" );
	}
	
	function getWeather() {
		var apiurl = api + lat + "," + lon;
		$.getJSON( apiurl, function ( json ) {
			var icon = '<img class="mx-auto icon img-responsive d-block" src="' + json.current.condition.icon + '"alt="' + json.current.condition.text + '">';
			$( "#icon" ).html( icon );

			var conditiontext = '<h2 class="text-center">' + json.current.condition.text + "</h2>";
			$( "#text" ).html( conditiontext );

			var city = "<h2 class=' text-center'>" + json.location.country + "<br>" + json.location.region + "</br>" + json.location.name + "</h2>";
			$( "#city" ).html( city );
			var humidity = "<h1 class='text-center'>" + "Humidity: " + " %" + json.current.humidity + "</h1>";
			$( "#humidity" ).html( humidity );
			var temp_cString = json.current.temp_c + "°C";
			var temp_fString = + json.current.temp_f + "°F";
			$( "#derece" ).html( temp_cString );

			$( "#temp_c" ).on( "click", function () {
				var temp_c = $( "#derece" ).html( temp_cString );
			} );
			$( "#temp_f" ).on( "click", function () {
				var temp_f = $( "#derece" ).html( temp_fString );

			} );
		} );
	}
} );
