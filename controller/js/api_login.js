let url_login = `api/api_login.php`;


function api_checkLogin(obj, cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_login;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'check_login',
            'email' : obj.email,
            'password' : obj.password
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('getting data...');
        },
        success: function(data){
            // console.log(data);
            cbsuccess(data);
        },
        complete: function(){
            console.log("complete...");
            cbcomplete();
        }
    });
}

function api_fetchAccounts(cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_login;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'fetchAccounts'
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('fetching data...');
        },
        success: function(data){
            console.log(data);
            cbsuccess(data);
        },
        complete: function(){
            console.log("complete...");
            cbcomplete();
        }
    });
}
function api_createAccount(obj, cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_login;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'createAccount',
            'id' : obj.id,
            'first_name' : obj.first_name,
            'last_name' : obj.last_name,
            'email' : obj.email,
            'password' : obj.password
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('saving data...');
        },
        success: function(data){
            console.log(data);
            cbsuccess();
        },
        complete: function(){
            console.log("complete...");
            cbcomplete();
        }
    });
}
function api_updateAccount(obj, cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_login;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'updateAccount',
            'id' : obj.id,
            'first_name' : obj.first_name,
            'last_name' : obj.last_name,
            'email' : obj.email,
            'password' : obj.password
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('saving data...');
        },
        success: function(data){
            console.log(data);
            cbsuccess();
        },
        complete: function(){
            console.log("complete...");
            cbcomplete();
        }
    });
}

function api_deleteAccount(obj, cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_login;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'deleteAccount',
            'id' : obj.id
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('deleting data...');
        },
        success: function(data){
            console.log(data);
            cbsuccess();
        },
        complete: function(){
            console.log("complete...");
            cbcomplete();
        }
    });
}



