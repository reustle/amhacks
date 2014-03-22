// Submit button press
$('.panel-apply button').click(function(){
	
	// Read form
	var form_data = {
		name : $('#form_name').val(),
		email : $('#form_email').val(),
		twitter : $('#form_twitter').val(),
		github : $('#form_github').val(),
		hack : $('#form_hack').val()
	};
	
	// Validate
	if(form_data.name.length < 5){
		alert('Please enter your name');
		return false;
	}
	if(form_data.email.length < 5){
		alert('Please enter your email address');
		return false;
	}
	if(form_data.twitter.length < 2){
		alert('Please enter your twitter handle');
		return false;
	}
	if(form_data.github.length < 2){
		alert('Please enter your github username');
		return false;
	}
	if(form_data.hack.length < 5){
		alert('Please provide a link to your coolest hack');
		return false;
	}
	
	// Let the user know we are loading
	$('.panel-apply button').html('Sending...').addClass('disabled');
	$(this).blur();
	
	// Submit the form
	$('.panel-apply form').submit();
	
});

// Mailchimp Submit
$('.panel-apply form').ajaxChimp({
	callback : function(res){
		
		$('.panel-apply form').slideUp();
		$('.application-complete').slideDown();
		
	},
	url : 'http://reustle.us7.list-manage2.com/subscribe/post?u=7529e30edd60b5d1f5ba46e68&id=ac896a0887'
});

// Hide this for now
$('.application-complete').hide();

