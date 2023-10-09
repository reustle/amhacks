var map;

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

$(document).on('ready', function(){
    // map = L.mapbox.map('map', 'ruidacosta.hjamk02c');
    // $(window).trigger('resize');
    
    $('a[href^="#"]').click(function(e) {
        var href = $(this).attr('href').toString();
        if($(href).length == 1){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
        }
    });
});
// $(window).on('resize', function(){
//     map.fitBounds([
//         [55.92458580482951, -65.390625],
//         [18.062312304546726, -131.30859375]
//     ]);
//     map.scrollWheelZoom.disable();
// });
$(window).on('scroll', function(){
    if($(window).scrollTop() > $('#home').outerHeight()){
        $('#header').addClass('fixed');
    }
    else {
        $('#header').removeClass('fixed');
    }
});

