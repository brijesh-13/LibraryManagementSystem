
$(document).ready(function(){
    showLoadingReport("Please Wait...");
    const user = localStorage.getItem('user');
    console.log('Logged in user: ' + user);
    if(user != "admin"){
        window.location.replace(domain + "guest.php");
    }else{
        if(LIBRARY.client_list.length == 0){
            LIBRARY._fetchClients();
        }
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













// client view
function displayClients(text){
    let client_list = [];
    if(text == ""){
        client_list = LIBRARY.getClientList();
    }else{
        client_list = LIBRARY.searchClient(text);
    }
    
    $('.acclistcon').empty();
    $.each(client_list, function(i, val){
        const widget = `<div cid="${val.id}" class="widget btn-shadow">
                            <span>${val.title}</span>
                        </div>`;

        $('.acclistcon').append(widget);
    });
}
function resetClientView(){
    $('#view-accid').html('');
    $('#accview-firstname').val();
    $('#accview-lastname').val();
    $('#accview-email').val();
    $('#accview-password').val();

    
    $('#accview-firstname').attr('disabled', true);
    $('#accview-lastname').attr('disabled', true);
    $('#accview-email').attr('disabled', true);
    $('#accview-password').attr('disabled', true);

    $('#accviewedit').attr('cid', 'edit');
    $('#accviewedit').html('Edit');
    
};
function fillClientView(client){
    $('#view-accid').attr('cid', client.id);
    $('#view-accid').html(client.id);
    $('#accview-firstname').val(client.first_name);
    $('#accview-lastname').val(client.last_name);
    $('#accview-email').val(client.email);
    $('#accview-password').val(client.password);
    if(client.id == "admin"){
        $('#accviewdelete').prop('disabled', true);
        $('#accviewedit').prop('disabled', false);
    }else{
        $('#accviewdelete').prop('disabled', false);
        $('#accviewedit').prop('disabled', true);
    }
};
$('.nav-handle-h[cid="client"]').on('click', function(){
    $('.viewacc').hide();
    $('.acclistcon').empty();
    const client_list = LIBRARY.getClientList();
    $.each(client_list, function(i, val){
        const widget = `<div cid="${val.id}" class="widget btn-shadow">
                            <span>${val.first_name}</span>
                        </div>`;
        $('.acclistcon').append(widget);
    });
});
// search book
$('#client-searchicon').on('click', function(){
    const text = $('#accSearch').val();
    console.log('search client... ', text);
    //search text and change inventory widgets accordingly...
});
//view password
$('#viewpassword').on('click', function(){
    console.log('view password...');
    const type = $('#accview-password').attr('type');
    if(type === 'password'){
        $('#accview-password').attr('type', 'text');
    }else if(type === 'text'){
        $('#accview-password').attr('type', 'password');
    }
}); 
// client view close
$('#acc-view-close').on('click', function(){
    console.log('view cliet close...');
    resetClientView();
    $('.viewacc').hide();
}); 
// when you click on the client widget on the left
$(document).on('click', '.acclistcon > .widget', function(){
    console.log('client widget clicked...');
    resetClientView();
    const cid = $(this).attr('cid');
    if(cid != undefined){
        const client = LIBRARY.getClient(cid);
        fillClientView(client);
    }
    $('.viewacc').show();
});
//client edit/save
$('#accviewedit').on('click', function(){
    const cid = $(this).attr('cid');
    if(cid.includes('edit')){
        console.log('editing... ');
        $('#accview-firstname').attr('disabled', false);
        $('#accview-lastname').attr('disabled', false);
        $('#accview-email').attr('disabled', false);
        $('#accview-password').attr('disabled', false);

        $(this).attr('cid','save');
        $(this).html('Save');
    }else if(cid.includes('save')){
        console.log('saaving... ');
        // pull data and save from here...
        const id = $('#view-accid').attr('cid');
        const first_name = $('#accview-firstname').val();
        const last_name = $('#accview-lastname').val();
        const email = $('#accview-email').val();
        const password = $('#accview-password').val();
        const client_obj = {
            'id':id,
            'first_name':first_name,
            'last_name':last_name,
            'email':email,
            'password':password
        };
        console.log(client_obj);


        const callback=()=>{
            showNotification("Saved successfully!","");
            $('#accview-firstname').attr('disabled', true);
            $('#accview-lastname').attr('disabled', true);
            $('#accview-email').attr('disabled', true);
            $('#accview-password').attr('disabled', true);
            $(`.acclistcon > .widget[cid="${id}"] > span`).html(id);
            $(this).attr('cid','edit');
            $(this).html('Edit');
        };
        LIBRARY.updateClient(client_obj, callback);
    }
});















//inventory view...
function displayBooks(text){
    let book_list = [];
    if(text == ""){
        book_list = LIBRARY.getBookList();
    }else{
        book_list = LIBRARY.searchBook(text);
    }
    
    $('.inventory-listcon').empty();
    $.each(book_list, function(i, val){
        const widget = `<div cid="${val.id}" class="widget btn-shadow">
                            <span>${val.title}</span>
                        </div>`;

        $('.inventory-listcon').append(widget);
    });
}
function resetInventoryCreate(){
    $('.inventory-create-id').html('');
    $('#inventory-create-title').val('');
    $('#inventory-create-author').val('');
    $('#inventory-create-year-published').val('');
    $('#inventory-create-qty').val('0');
    $('#inventory-create-description').val('');
    // $('.iventory-create-image > img').remove();
};
function resetInventoryView(){
    $('.inventory-view-id').html('');
    $('#inventory-view-title').val('');
    $('#inventory-view-author').val('');
    $('#inventory-view-year-published').val('');
    $('#inventory-view-qty').val('0');
    $('#inventory-view-description').val('');
    // $('.iventory-view-image > img').remove();

    
    $('#inventory-view-title').attr('disabled', true);
    $('#inventory-view-author').attr('disabled', true);
    $('#inventory-view-year-published').attr('disabled', true);
    $('#inventory-view-qty').attr('disabled', true);
    $('#inventory-view-description').attr('disabled', true);

    
    $('#inventory-view-edit').attr('cid', 'edit');
    $('#inventory-view-edit').html('Edit');
};
function fillInventoryView(book){
    if(book != undefined){
        $('.inventory-view-id').attr('cid', book.id);
        $('.inventory-view-id').html(book.title);
        $('#inventory-view-title').val(book.title);
        $('#inventory-view-author').val(book.author);
        $('#inventory-view-year-published').val(book.year);
        $('#inventory-view-qty').val(book.qty);
        $('#inventory-view-description').val(book.description);
    }
};
function displayBookList(){
    $('.inventory-listcon').empty();
    const book_list = LIBRARY.getBookList();
    $(book_list).each(function(){
        const widget = `<div cid="${this.id}" class="widget btn-shadow">
                            <span>${this.title}</span>
                        </div>`;
        $('.inventory-listcon').append(widget);
    });
}

$('.nav-handle-h[cid="inventory"]').on('click', function(){
    console.log('display book list in admin view....');
    displayBookList();
});
// search book
$('#inventory-searchicon').on('click', function(){
    const text = $('#inventory-search').val();
    console.log('search book... ', text);
    //search text and change inventory widgets accordingly...
    displayBooks(text);
    $('.view-inventory').hide();
});
// when you click on the inventory widget on the left
$(document).on('click', '.inventory-listcon > .widget', function(){
    console.log('inventory widget clicked...');
    resetInventoryView();
    const cid = $(this).attr('cid');
    console.log(cid);
    if(cid != undefined){
        const book = LIBRARY.getBook(cid);
        console.log(book);
        fillInventoryView(book);
    }
    $('.view-inventory').show();
});
// close inventory view
$(document).on('click', '#inventory-view-close', function(){
    console.log('inventory view closed...');
    resetInventoryView();
    $('.view-inventory').hide();
});
// close inventory create
$(document).on('click', '#inventory-create-close', function(){
    console.log('inventory create closed...');
    resetInventoryCreate();
    $('.create-inventory').hide();
});
$('#inventory-view-title').on('input', function(){
    $('.inventory-view-id').html($(this).val());
});
$('#choose-book-image').on('change', function(){
    const reader = new FileReader();
    let image = "";
    reader.addEventListener("load", ()=> {
        image = reader.result;
        $('.iventory-view-image > img').attr('src', image);
    });
    reader.readAsDataURL(this.files[0]);
});
$('.iventory-view-image > img').on('click', function(){
    if($('#inventory-view-edit').attr('cid') == 'save'){
        console.log('choosing image...');
        $('#choose-book-image').click();
    }else{
        console.log($(this).attr('src'));
    }
});
//inventory edit/save
$('#inventory-view-edit').on('click', function(){
    const cid = $(this).attr('cid');
    if(cid.includes('edit')){
        console.log('editing... ');
        $('#inventory-view-title').attr('disabled', false);
        $('#inventory-view-author').attr('disabled', false);
        $('#inventory-view-year-published').attr('disabled', false);
        $('#inventory-view-qty').attr('disabled', false);
        $('#inventory-view-description').attr('disabled', false);
        $(this).attr('cid','save');
        $(this).html('Save');
    }else if(cid.includes('save')){
        console.log('saaving... ');
        // pull data and save from here...
        const id = $('.inventory-view-id').attr('cid');
        const title = $('#inventory-view-title').val();
        const author = $('#inventory-view-author').val();
        const year = $('#inventory-view-year-published').val();
        const qty = $('#inventory-view-qty').val();
        const description = $('#inventory-view-description').val();
        const image = "lib//images//book.jpg";
        // const image = $('.iventory-view-image > img').attr('src');
        const client_id = 'undefined';
        const book_obj = {
            'id' : id,
            'title' : title,
            'author' : author,
            'year' : year,
            'qty' : qty,
            'description' : description,
            'image' : image,
            'client_id' : client_id
        };
        console.log(book_obj);


        const callback=()=>{
            showNotification("Saved successfully!","");
            $('#inventory-view-title').attr('disabled', true);
            $('#inventory-view-author').attr('disabled', true);
            $('#inventory-view-year-published').attr('disabled', true);
            $('#inventory-view-qty').attr('disabled', true);
            $('#inventory-view-description').attr('disabled', true);
            $(`.inventory-listcon > .widget[cid="${id}"] > span`).html(title);
            $(this).attr('cid','edit');
            $(this).html('Edit');
        };
        LIBRARY.updateBook(book_obj, callback);
    }
});
//inventory delete
$('#inventory-view-delete').on('click', function(){
    const id = $('.inventory-view-id').attr('cid');
    console.log('removing... ', id);
    const callback =()=>{
        $(`.inventory-listcon > .widget[cid="${id}"]`).remove();
        resetInventoryView();
        $('.view-inventory').hide();
        showNotification("Removed Successfully!","");
    };
    LIBRARY.removeBook({'id':id}, callback);
});
//open add book view
$('#add-book').on('click', function(){
    console.log('adding new book...');
    resetInventoryCreate();
    $('.view-inventory').hide();
    $('.create-inventory').show();
});

$('#inventory-create-save').on('click', function(){
    console.log('saving... ');
    // pull data and save from here...
    const id = rngBookId();
    const title = $('#inventory-create-title').val();
    const author = $('#inventory-create-author').val();
    const year = $('#inventory-create-year-published').val();
    const qty = $('#inventory-create-qty').val();
    const description = $('#inventory-create-description').val();
    const image = "lib//images//book.jpg";
    const client_id = 'undefined';

    const book_obj = {
        'id' : id,
        'title' : title,
        'author' : author,
        'year' : parseInt(year),
        'qty' : parseInt(qty),
        'description' : description,
        'image' : image,
        'client_id' : client_id
    };
    console.log(book_obj);

    if(book_obj.title.length > 0 && book_obj.author.length > 0 && book_obj.year > 0 && book_obj.description.length > 0){
        const callback=()=>{
            const widget = `<div cid="${id}" class="widget btn-shadow">
                                <span>${title}</span>
                            </div>`;
                            $('.inventory-listcon').append(widget);
            showNotification("Saved successfully!","");
            $('.create-inventory').hide();
        };
        LIBRARY.addBook(book_obj, callback);
    }else{
        showNotification("Invalid Entry!","Please enter fill out the necessary fields...");
    }
});




