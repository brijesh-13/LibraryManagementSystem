let url_login = `api/api_login.php`;


function api_login(cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_login;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'login'
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('getting data...');
            showLoadingReport('...');
        },
        success: function(data){
            console.log(data);
            cbsuccess(data);
        },
        complete: function(){
            console.log("complete...");
            cbcomplete();
            hideLoadingReport();
        }
    });
}



