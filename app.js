var main = function() {

/*****Adding Custom Name Function*****/
    
    /*--WINDOW PROMPT FOR NAME--
    if($('.home').length > 0){
        var name=prompt("Hi there!\nWhat's your name?");
        if(name!= null){
            $('h1 a').text(name);
        }
        else {
            $('h1 a').text('there')
        }
    }
    */

    /*--CODE FOR BLANK HOME PAGE NAME PROMPT--
    $('#input1').keyup(function (e){

        if (e.keyCode == 13){
            var name = document.getElementById("input1").value;
            $('#input1').remove();
            document.getElementById("greeting").innerHTML = "Hey " + name + ". What's bothering you?";

            $('#start').css('visibility', 'visible');  
            $('#blurb').css('visibility', 'visible');          
        }

    });

    */

/****CODE FOR CUSTOM NAME PAGE PROMPT****/
     $('#input1').keyup(function (e){

        if (e.keyCode == 13){
            var name = document.getElementById("input1").value;
            $('#input1').remove();
            $('#prompt').remove();
            document.getElementById("greeting").innerHTML = "Hi " + name + ". What's bothering you?";      
        }

    });

/*****List Posting Box Function*****/
    
    $('#post').click(function() {
        var post = $('.status-box').val();
        /*$('<li>').text(post).prependTo('.posts');*/
        var item = $('<li>').text(post);
        $('.posts').prepend(item);
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
            $(this).removeClass('selected pulse').effect('shake', {times: 1}, 300);
        }
        else {
            $(this).addClass('selected pulse').effect('shake', {times: 1}, 300);                  
        }
	});

    $('#delete').click(function() {
    	$('.selected').remove();
	});

/*****Table Posting Box Function****/

    $('#post').click(function(){
        var post = $('.status-box').val();
        var
        $('#posts tbody').append(
            "<tr>"+
            "<td>"+
            post+
            "</td>"+
            "<td><a href='#'>blah</a></td>"+
            "</tr>"
            );              
    });


/*****Believe Button Function*****

    $('#believe').dialog({
        autoOpen: false,
        minHeight: 100,
    });    

    $('#opener').click(function() {
        $('#believe').dialog('open').fadeIn(500);
    });
*/
/*****Pulse Button Function*****/

    $('#start').click(function(){
        $(this).removeClass('pulse');
    });

};

$(document).ready(main)