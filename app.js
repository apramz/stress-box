var main = function() {


/****CODE FOR CUSTOM NAME PAGE PROMPT****/
     $('#input1').keyup(function (e){

        if (e.keyCode == 13){
            var name = document.getElementById("input1").value;
            $('#input1').remove();
            $('#prompt').remove();
            document.getElementById("greeting").innerHTML = "Hi " + name + ". What's bothering you?";
            $('#start').css('visibility', 'visible').fadeIn(1000);  
            $('#blurb').css('visibility', 'visible').fadeIn(1000)      
        }

    });

/*****List Posting Box Function*****/
    /*
    $('#post').click(function() {
        var post = $('.status-box').val();
        var item = $('<li>').text(post);
        $('.posts').prepend(item);
        $('.status-box').val('');
        $('.counter').text('140');
        $('#post').addClass('disabled');
    });*/

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
/*
    $('.posts').on('click', 'li', function() {
		if($(this).hasClass('selected')) {
            $(this).removeClass('selected pulse').effect('shake', {times: 1}, 300);
        }
        else {
            $(this).addClass('selected pulse').effect('shake', {times: 1}, 300);                  
        }
	});

    $('#delete').click(function() {
    	$('.selected').remove();
	});
*/
/*****Table Posting Box Function****/

    $('#post').click(function(){
        var post = $('.status-box').val();
        $('#posts tbody').prepend(
            "<tr><td class='entry'>"+post+"</td><td id='delete' style='cursor:hand'><a href='#'>X</a></td></tr>");
        $('.status-box').val('');
        $('.counter').text('140');
        $('#post').addClass('disabled');                  
    });

    $('.status-box').keyup(function (e){
        if (e.keyCode == 13){    
            var post = $('.status-box').val();
            $('#posts tbody').prepend(
                "<tr><td class='entry'>"+post+"</td><td id='delete'><a href='#'>X</a></td></tr>");
            $('.status-box').val('');
            $('.counter').text('140');
            $('#post').addClass('disabled');  
        }                
    });            

/*****Table Delete Function****/

    $('#posts').on("click", "#delete", function() {
        $(this).parent('tr:first').remove();
    });

/*****Pulse Button Function*****/

    $('#start').click(function(){
        $(this).removeClass('pulse');
    });

};

$(document).ready(main)