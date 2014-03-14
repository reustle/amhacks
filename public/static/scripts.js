// Mailchimp submit
$('#apply_form').ajaxChimp({
	callback : function(res){
		if(res.result == 'success'){
			alert('Almost finished... We need to confirm your email address. To complete the application process, please click the link in the email we just sent you.')
			window.location = '/';
		}
	},
	url : 'http://reustle.us7.list-manage2.com/subscribe/post?u=7529e30edd60b5d1f5ba46e68&id=ac896a0887'
});

// Submit button press
$('#btn_apply').click(function(){
	
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
	if(form_data.twitter.length < 2){
		alert('Please enter your twitter handle');
		return false;
	}
	if(form_data.hack.length < 5){
		alert('Please provide a link to your coolest hack');
		return false;
	}
	
	$('#apply_form').submit();
	
});

