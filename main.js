var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];


for (var i = 0; i <cities.length; i++) {
	console.log(cities[i]);

	$('#city-options').append('<option val="' +cities[i]+ '"> '+cities[i]+' </option>')

}
	
$('#city-options').on('change', function(){ //*why does this work if NYC is pre-selected on page load? Do we need to account for that?
	var input = $('city-type').val();
	$('body').removeClass();
	if (input === 'NYC'){
		$('body').addClass('nyc');
		} else if (input === 'SF'){
			$('body').addClass('sf');
		} else if (input === 'LA'){
			$('body').addClass('la');
		} else if (input === 'ATX'){
			$('body').addClass('austin');
		} else if (input === 'SYD'){
			$('body').addClass('sydney');
		}
});

//console.log(cities[2]); to get LA from the array

			// function updateBackground(e){
			// 	e.preventDefault();
			// 	var input = $('#city-type').val();
			// 	//get user input
			// 	if (input === "New York" || input === "New York City" || input === "NYC"){
			// 		//add various permutations of user input
			// 		$('body').removeClass();
			// 		//remove any old classes
			// 		$('body').addClass('nyc');
			// 		//add new background image
			// 	} else if (input === "San Francisco" || input === "San Fran" || input === "SF"){
			// 		$('body').removeClass();
			// 		$('body').addClass('sf');
			// 	} else if (input === "Los Angeles" || input === "LA" || input === "LAX"){
			// 		$('body').removeClass();
			// 		$('body').addClass('la');
			// 	} else if (input === "Austin" || input === "ATX"){
			// 		$('body').removeClass();
			// 		$('body').addClass('austin');
			// 	} else if (input === "Sydney" || input === "SYD"){
			// 		$('body').removeClass();
			// 		$('body').addClass('sydney');
			// 	}

			// }

			// $('form').on('submit', updateBackground);
			// //call the update background function when pressing submit button