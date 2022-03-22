const domain = 'http://localhost/CP476_Final_Project/';




//random 9 digit numbers
function rng09(){
    return Math.floor((Math.random() * 9) + 0);
}
// generates account ID
function rngAccountId(){
    return 'A-' + rng09() +  rng09() + rng09() + rng09() + rng09() + rng09() + rng09() + rng09() + rng09();
}
// generates book ID
function rngAccountId(){
    return 'B-' + rng09() +  rng09() + rng09() + rng09() + rng09() + rng09() + rng09() + rng09() + rng09();
}







// opens and closes side navigation
$(document).on('mouseover', '#nav', function(){
    $(this).removeClass('closed');
});
$(document).on('mouseout', '#nav', function(){
    $(this).addClass('closed');
});

























function blink(sel, color1, color2){
    sel.stop( true, true).animate({ "border-color": color1 }, 100).animate({ "border-color": color2 }, 130).animate({ "border-color": color1 }, 100).animate({ "border-color": color2 }, 130);
}
function blinkbg(sel, color1, color2){
    sel.stop( true, true).animate({ "background-color": color1 }, 100).animate({ "background-color": color2 }, 130).animate({ "background-color": color1 }, 100).animate({ "background-color": color2 }, 130);
}
function flash(sel){
    // console.log('flash');
    sel.stop( true, true).css('opcity', '0').animate({opacity: 1}, 1000).animate({opacity: 0}, 1000);
}












function showLoadingReport(message){
    $('#report span').text(message);
    $('#report').css('display','flex').show();
}
function hideLoadingReport(){
    $('#report').css('display','none').hide();
}
function showNotification(title, message){
    $('#notification span').text(message).css('display', 'none');
    $('#notification h2').text(title).css('display', 'none');
    $('#notification').css({'opacity' : '1', 'width' : '0px', 'display' : 'flex'}).animate({'width' : '25vw'}, 800, function(){
        // $('#notification-close').css({'opacity' : '0', 'display' : 'flex'}).animate({'opacity' : '1'}, 500);
        $('#notification span, #notification h2, #notification-close').css({'opacity' : '0', 'display' : 'flex'}).animate({'opacity' : '1'}, 500);
    });
    setTimeout(function(){
        hideNotification();
    }, 3000);
}
function hideNotification(){
    // console.log('running animations');
    $('#notification span, #notification h2').animate({'opacity' : '0'}, 400, function(){
        $('#notification').css('height', '90px').animate({'width' : '1px'}, 600, function(){
            $('#notification').animate({'opacity' : '0'}, 200, function(){
                $('#notification-close').css({'opacity' : '0', 'display' : 'none'});
                $('#notification').css('display', 'none');
            });
        });
    });
}
function showAction(title, callbacktrue, callbackfalse){
    $('#action-title').text(title);
    $('#action').show().css('display', 'flex');
    $('#action-select-yes').off();
    $('#action-select-no').off();
    $('#action-select-yes').click(function(){
        callbacktrue();
        $('#action').hide();
    });
    $('#action-select-no').click(function(){
        callbackfalse();
        $('#action').hide();
    });
}

$('#notification-close').click(function(){
    hideNotification();
});

