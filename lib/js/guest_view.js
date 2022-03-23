


$('#guest-login').on('click', function(){
    console.log('login...');
    $('.popup-con').show();
    $('.login-con').show();
    
});
$('#login-close').on('click', function(){
    console.log('cancel login...');
    $('.popup-con').hide();
    $('.login-con').hide();
});


$('#register-to-login').on('click', function(){
    console.log('already a member, going to login popup...');
    $('.register-con').hide();
    $('.login-con').show();
});
$('#login-to-signup').on('click', function(){
    console.log('not a member, going to sinup popup...');
    $('.login-con').hide();
    $('.register-con').show();
});



function register_member(){
    console.log('register member...');
    showLoadingReport("please wait...");
    
    const first_name = $('#registerform-firstname').val();
    const last_name = $('#registerform-lastname').val();
    const user_name = $('#registerform-email').val();
    const password = $('#registerform-password').val();

    console.log('first_name: ' + first_name + 'last_name: ' + last_name + 'user_name: ' + user_name + ' Password: ' + password);

    const cb_complete = function(){
        localStorage.setItem('user_name', user_name);
        // window.location.replace(domain + "guest.php")
        
        $('.register-con').hide();
        $('.popup-con').hide();
        $('.guest-login').hide();
        $('#logout').show();
        
        hideLoadingReport();
    }
    if(user_name.length>3){
        setTimeout(function(){
            cb_complete();
        },500); 
    }else{
        console.log("user name needs to be more than 5 characters...");
        showNotification("Invalid email!","Please enter a valid email...");
        hideLoadingReport();
    }

}

function check_login(){
    showLoadingReport('Please wait...');
    console.log('check login...');
    // api_login(()=>{},()=>{});
    const user_name = $('#loginform-email').val();
    const password = $('#loginform-password').val();

    console.log('user_name: ' + user_name + ' Password: ' + password);

    const cb_complete = function(){
        localStorage.setItem('user_name', user_name);
        // window.location.replace(domain + "guest.php")

        $('.login-con').hide();
        $('.popup-con').hide();
        if(user_name === "admin"){
            window.location.replace(domain + "admin.php")
        }else{
            $('.guest-login').hide();
            $('#logout').show();
        }

        hideLoadingReport();
    }
    if(user_name.length>3){
        setTimeout(function(){
            cb_complete();
        },500); 
    }else{
        console.log("user name needs to be more than 5 characters...");
        showNotification("Invalid email and/or password!","Please try again...");
        hideLoadingReport();
    }
}

// log out button
$("#logout").on("click", function(){
    console.log('Log out...');
    showLoadingReport("Please wait... ");
    localStorage.setItem('user_name', "");
    $('#logout').hide();
    $('#guest-login').show();

    setTimeout(function(){
        showNotification("Successfully Logged out...","");
        hideLoadingReport();
    },500); 
});
