
$(document).ready(function(){
    showLoadingReport("Please Wait...");
    const user = localStorage.getItem('user');
    console.log('Logged in user: ' + user);
    if(user != "admin"){
        window.location.replace(domain + "guest.php");
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
function resetClientView(){
    $('#view-accid').html('');
    $('#accview-firstname').val();
    $('#accview-lastname').val();
    $('#accview-email').val();
    $('#accview-password').val();
};
$('.nav-handle-h[cid="client"]').on('click', function(){
    $('.viewacc').hide();
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
    $('.viewacc').show();
});















//inventory view...
function resetInventoryView(){
    $('.inventory-view-id').html('');
    $('#inventory-view-title').val('');
    $('#inventory-view-author').val('');
    $('#inventory-view-year-published').val('');
    $('#inventory-view-qty').val('0');
    $('#inventory-view-description').val('');
    // $('.iventory-view-image > img').remove();
};
// search book
$('#inventory-searchicon').on('click', function(){
    const text = $('#inventory-search').val();
    console.log('search book... ', text);
    //search text and change inventory widgets accordingly...
});
// when you click on the inventory widget on the left
$(document).on('click', '.inventory-listcon > .widget', function(){
    console.log('inventory widget clicked...');
    resetInventoryView();
    $('.item').show();
});
// close inventory view
$(document).on('click', '#inventory-view-close', function(){
    console.log('inventory view closed...');
    resetInventoryView();
    $('.item').hide();
});
//inventory edit/save
$('#inventory-view-edit').on('click', function(){
    const cid = $(this).attr('cid');
    console.log('editing... ');
    
    $('#inventory-view-author').attr('disabled', false);
    $('#inventory-view-year-published').attr('disabled', false);
    $('#inventory-view-qty').attr('disabled', false);
    $('#inventory-view-description').attr('disabled', false);
});





