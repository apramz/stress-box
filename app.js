var main = function() {
    $('#post').click(function() {
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('140');
        $('#post').addClass('disabled');
    });

    $('.status-box').keyup(function() {
    	var postLength = $(this).val().length;
    	var charactersLeft = 140 - postLength;
    	$('.counter').text(charactersLeft);

    	if(charactersLeft < 0) {
    		$('#post').addClass('disabled');
    	}
    	else if(charactersLeft === 140) {
    		$('#post').addClass('disabled');
    	}
    	else {
    		$('#post').removeClass('disabled');
    	}
    });

    $('li').click(function() {
		$(this).addClass('selected');
	});

    $('#delete').click(function() {
    	$('.selected').hide();
	});


    $('#post').addClass('disabled');
};

$(document).ready(main)