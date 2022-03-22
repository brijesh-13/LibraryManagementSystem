






// when this js file is loaded this default function runs first
$(document).ready(function(){
    showLoadingReport("Please Wait...");
    const user_name = localStorage.getItem('user_name');
    console.log('Logged in user: ' + user_name);
    if(user_name === null || user_name === ""){
        console.log('go to login page...');
        window.location.replace(domain + "login.php")
    }
    setTimeout(function(){
        hideLoadingReport();
    },1500); 
});



// log out button
$("#log_out_button").on("click", function(){
    console.log('Log out...');
    localStorage.setItem('user_name', "");
    window.location.replace(domain + "login.php")
});









//this handles navigation widgets, should content based on which navigation item was clicked
$(document).on('click', '.nav-handle-h', function(){
    const cid = $(this).attr('cid');
    console.log(cid);

    $('.nav-maincontainer-').css('display', 'none').hide();
    $('.nav-maincontainer').css('display', 'none').hide();
    $(`.maincontainer-${cid}`).css('display', 'flex').show();
});

