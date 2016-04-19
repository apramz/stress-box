var main = function() {

/*****Adding Custom Name Function*****/

    if($('.home').length > 0){
        var name=prompt("Hi there!\nWhat's your name?");
        if(name!= null){
            $('h1 a').text(name);
        }
        else {
            $('h1 a').text('there')
        }
    }
/*****Posting Box Function*****/

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

    $('#post').addClass('disabled');    

/*****List Click Function*****/

    $('.posts').on('click', 'li', function() {
		if($(this).hasClass('selected')) {
            $(this).removeClass('selected').effect('shake', {times: 1}, 300);
        }
        else {
            $(this).addClass('selected').effect('shake', {times: 1}, 300);                  
        }
	});

    $('#delete').click(function() {
    	$('.selected').remove();
	});

/*****Believe Button Function*****/

    $('#believe').dialog({
        autoOpen: false,
        minHeight: 100,
    });    

    $('#opener').click(function() {
        $('#believe').dialog('open').fadeIn(500);
    });

/*****Pulse Button Function*****/

    $('#start').click(function(){
        $(this).removeClass('pulse');
    });

};

$(document).ready(main)