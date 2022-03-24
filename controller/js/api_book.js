let url_book = `api/api_book.php`;


    //call these funtions like so...
    // api_fetchBooks(()=>{},()=>{});

    // const obj = {
    //     'id' : 'obj.id',
    //     'title' : 'obj.title',
    //     'author' : 'obj.author',
    //     'year' : 2022,
    //     'qty' : 2,
    //     'description' : 'obj.description',
    //     'image' : 'obj.image',
    //     'client_id' : 'obj.client_id'
    // };
    // api_createBook(obj, ()=>{},()=>{});
    // api_updateBook(obj, ()=>{},()=>{});

    
    // api_deleteBook({'id':''},()=>{},()=>{});


    
function api_fetchBooks(cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_book;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'fetchBooks'
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('getting data...');
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

function api_addBook(obj, cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_book;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'addBook',
            'id' : obj.id,
            'title' : obj.title,
            'author' : obj.author,
            'year' : obj.year,
            'qty' : obj.qty,
            'description' : obj.description,
            'image' : obj.image,
            'client_id' : obj.client_id
        },
        dataType: 'json',
        beforeSend: function(){
            console.log('saving data...', obj);
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

function api_updateBook(obj, cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_book;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'updateBook',
            'id' : obj.id,
            'title' : obj.title,
            'author' : obj.author,
            'year' : obj.year,
            'qty' : obj.qty,
            'description' : obj.description,
            'image' : obj.image,
            'client_id' : obj.client_id
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

function api_deleteBook(obj, cbsuccess=()=>{}, cbcomplete=()=>{}){
    let url = domain + url_book;
    $.ajax({
        async: false,
        url: url,
        contentType: "application/json",
        type: 'GET',
        data: {
            function : 'deleteBook',
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
