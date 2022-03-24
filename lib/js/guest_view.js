
function displayBooks(text){
    let book_list = [];
    if(text == ""){
        book_list = LIBRARY.getBookList();
    }else{
        book_list = LIBRARY.searchBook(text);
    }

    $('.inventory-con').empty();
    $.each(book_list, function(i, val){
        const widget = `<div cid="${val.id}" class="column">
                            <label class="book-image">
                                <img src="${val.image}" alt="Book Image">
                            </label>
                            <label for="book" class="book-title">${val.title}</label>
                        </div>`;

        $('.inventory-con').append(widget);
    });
}

$(document).ready(function(){
    showLoadingReport("Please Wait...");
    const user = localStorage.getItem('user');
    console.log('Logged in user: ' + user);
    if(user != ""){
        $('#logout').show();
        $('#guest-login').hide();
    }else{
        $('#logout').hide();
        $('#guest-login').show();
    }

    displayBooks("");
    setTimeout(function(){
        hideLoadingReport();
    },500); 
});


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
$('#register-close').on('click', function(){
    console.log('cancel register...');
    $('.popup-con').hide();
    $('.register-con').hide();
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


// signup
function register_member(){
    console.log('register member...');
    showLoadingReport("please wait...");
    
    const email = $('#registerform-email').val();
    const password = $('#registerform-password').val();

    if(email.length < 3 || password.length == 0){
        showNotification("Invalid email and/or password!","Please try again...");
    }else{
        const id = rngClientId();
        const first_name = $('#registerform-firstname').val();
        const last_name = $('#registerform-lastname').val();
    
        const acc_obj = {
            'id' : id,
            'first_name' : first_name,
            'last_name' : last_name,
            'email' : email,
            'password' : password
        };
        console.log(acc_obj);


        const cb_success = function(){
            LIBRARY.logged_in_user = acc_obj;
            localStorage.setItem('user', LIBRARY.logged_in_user.id);

            $('.login-con').hide();
            $('.popup-con').hide();
            $('.guest-login').hide();
            $('#logout').show();
        }
        const cb_complete=()=>{};
        api_createAccount(acc_obj, cb_success, cb_complete);
    }
    hideLoadingReport();

}
//login
function check_login(){
    showLoadingReport('Please wait...');
    console.log('check login...');
    const user_name = $('#loginform-email').val();
    const password = $('#loginform-password').val();

    const login_obj ={
        'email' : user_name,
        'password' : password
    };
    console.log('user_name: ' + user_name + ' Password: ' + password);

    const cb_success = function(data){

        if(data.response === 'error'){
            // user not found
            showNotification("Invalid email and/or password!","Please try again...");
        }else{
            console.log(data);
            LIBRARY.logged_in_user = {
                'id' : data.id,
                'first_name' : data.first_name,
                'last_name' : data.last_name,
                'email' : data.email
            };
            localStorage.setItem('user', LIBRARY.logged_in_user.id);


            $('.login-con').hide();
            $('.popup-con').hide();
            if(LIBRARY.logged_in_user.id === "admin"){
                window.location.replace(domain + "admin.php")
            }else{
                $('.guest-login').hide();
                $('#logout').show();
            }
        }

        hideLoadingReport();
    }
    const cb_complete=()=>{};
    api_checkLogin(login_obj, cb_success, cb_complete);
}


// log out button
$("#logout").on("click", function(){
    console.log('Log out...');
    showLoadingReport("Please wait... ");
    localStorage.setItem('user', "");
    $('#logout').hide();
    $('#guest-login').show();

    setTimeout(function(){
        showNotification("Successfully Logged out...","");
        hideLoadingReport();
    },500); 
});




// book search
$('#search-book').on('click', function(){
    console.log('search for book...');
    const search_text = $('#search-book-text').val();
    displayBooks(search_text);
});