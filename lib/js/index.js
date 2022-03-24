






// when this js file is loaded this default function runs first
$(document).ready(function(){
    // showLoadingReport("Please Wait...");
    const user_name = localStorage.getItem('user');
    console.log('Logged in user: ' + user_name);
    if(user_name !== "admin"){
        console.log('go to login page...');
        window.location.replace(domain + "guest.php")
    }

    
    $('.nav-handle-h[cid="inventory"').click();
    setTimeout(function(){
        hideLoadingReport();
    },500); 
});



// log out button
$("#log_out_button").on("click", function(){
    console.log('Log out...');
    localStorage.setItem('user', "");
    window.location.replace(domain + "guest.php")
});









//this handles navigation widgets, should content based on which navigation item was clicked
$(document).on('click', '.nav-handle-h', function(){
    const cid = $(this).attr('cid');
    console.log(cid);

    $('.nav-maincontainer-').css('display', 'none').hide();
    $('.nav-maincontainer').css('display', 'none').hide();
    $(`.maincontainer-${cid}`).css('display', 'flex').show();
});

