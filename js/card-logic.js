//reverse logic
function reverseCard(){
	if(reverse === false){
		reverse = true;
	}else if(reverse === true){
		reverse = false;
	};
}

//wild card logic
function startPlayWildCard(){
	$('#wildCardModal').modal('show');
	var button = $('#submit-button')
	button.click(function(){
		$('#wildCardModal').modal('hide');
		var userSelection = $('input[name="option"]:checked');
    	cardPlayed[0].color = userSelection[0].value;
    	nextTurn();
	});
}