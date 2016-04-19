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

    $('.posts').on('click', 'li', function() {
		if($(this).hasClass('selected')) {
            $(this).removeClass('selected').effect('shake', {times: 2}, 300);
        }
        else {
            $(this).addClass('selected').effect('shake', {times: 2}, 300);                  
        }
	});

    $('#delete').click(function() {
    	$('.selected').remove();
	});

    $('#believe').dialog({
        autoOpen: false,
        minHeight: 100,
    });    

    $('#opener').click(function() {
        $('#believe').dialog('open').fadeIn(500);
    });

    $('#post').addClass('disabled');
};

$(document).ready(main)