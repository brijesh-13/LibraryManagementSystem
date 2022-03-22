


function check_login(){
    api_login(()=>{},()=>{});
    const user_name = $('#loginform-email').val();
    const password = $('#loginform-password').val();

    console.log('user_name: ' + user_name + ' Password: ' + password);

    if(user_name.length>5){
        localStorage.setItem('user_name', user_name);
        window.location.replace(domain + "index.php")
    }else{
        console.log("user name needs to be more than 5 characters...");
    }
}