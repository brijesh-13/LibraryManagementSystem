






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


