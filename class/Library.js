

/*
    I have defined and initialized variable LIBRARY in defaults.js to Library class
    so, we can just use LIBRARY to access properties and functions of the Library class

    I imagine we have a library class as the main class

    all the books availbale are in book_list of the Library, each obj in Library.book_list would be a book class

    similary each obj in Library.client_list would be a client class
    client would be a guest that wants to borrow a book from the library, client would only show if the guest creates/signsup an account

    Logged_in_user would just be a list with details of the user that is currently logged in


*/

class Library{

    constructor() {
        this.book_list = [];
        this.client_list = [];
        this.logged_in_user = {
            "account_id" : undefined,
            "first_name" : undefined,
            "last_name" : undefined,
            "email" : undefined,
        };





        this.fetch();
        console.log(this);
    }

    /*
        you can add functions of the library class below here...
    */

    fetch(){
        const cb=()=>{
            if(this.logged_in_user.id == 'admin'){
                this._fetchClients();
            }
        }
        this._fetchBooks(cb);
    }
        _fetchBooks(cb){
            const dis = this;
            const cb_success=data=>{
                console.log(data);

                $(data).each(function(){
                    console.log(this);
                    dis.book_list[dis.book_list.length] = new Book(this);
                });
                setTimeout(() => {
                    cb();
                }, 10);
            };
            const cb_complete=()=>{};

            api_fetchBooks(cb_success,cb_complete);
        }
        _fetchClients(){
            const dis = this;
            const cb_success=data=>{
                console.log(data);

                $(data).each(function(i, val){
                    console.log(val);
                    if(dis.logged_in_user.id == val.id){
                        dis.logged_in_user = val;
                    }
                    dis.client_list[dis.client_list.length] = new Client(val);
                });
            };
            const cb_complete=()=>{};

            api_fetchAccounts(cb_success,cb_complete);
        }

    // books funstions
    getBookList(){
        const list = this.book_list;
        return list;
    }
    getBook(book_id){
        //this funnction adds a new book to this.book_list
        //newBook would be a list object containing details of the book class
        const dis = this;
        let book = undefined;
        $.each(dis.book_list, function(i, val){
            console.log(val);
            if(val.id == book_id){
                console.log('found...');
                book = val;
            }
        });
        return book;
    }
    addBook(new_book, callback){
        //this funnction adds a new book to this.book_list
        //newBook would be a list object containing details of the book class
        const cbsuccess=()=>{
            this.book_list[this.book_list.length] = new Book(new_book);
            callback();
        };
        const cbcomplete=()=>{};
        api_addBook(new_book,cbsuccess,cbcomplete);
    }
    updateBook(new_book, callback){
        //this funnction adds a new book to this.book_list
        //newBook would be a list object containing details of the book class
        const cbsuccess=()=>{
            this.book_list[this.book_list.length] = new Book(new_book);
            callback();
        };
        const cbcomplete=()=>{};
        api_updateBook(new_book,cbsuccess,cbcomplete);
    }
    removeBook(new_book, callback){
        //this funnction adds a new book to this.book_list
        //newBook would be a list object containing details of the book class
        const dis = this;
        const cbsuccess=()=>{
            // this.book_list[this.book_list.length] = new Book(new_book);
            let index = -1;
            $.each(dis.book_list, function(i, val){
                if(val.id === new_book.id){
                    index = i;
                }
            });
            if(index != -1){
                dis.book_list.splice(index,1);
            }
            callback();
        };
        const cbcomplete=()=>{};
        api_deleteBook({'id':new_book.id},cbsuccess,cbcomplete);
    }
    searchBook(text){
        const list = [];
        const dis = this;

        $.each(dis.book_list, function(i, val){
            if(val.id==text || val.title.includes(text) || val.author.includes(text) || val.year == text){
                list[list.length] = val;
            }
        });
        return list;
    }



    // clients funstions
    getClientList(){
        const list = this.client_list;
        return list;
    }
    getClient(client_id){
        const dis = this;
        let client = undefined;
        $.each(dis.client_list, function(i, val){
            console.log(val);
            if(val.id == client_id){
                console.log('found...');
                client = val;
            }
        });
        return client;
    }
    updateClient(new_client, callback){
        const cbsuccess=()=>{
            this.client_list[this.client_list.length] = new Client(new_client);
            callback();
        };
        const cbcomplete=()=>{};
        api_updateAccount(new_client,cbsuccess,cbcomplete);
    }
    searchClient(text){
        const list = [];
        const dis = this;

        $.each(dis.client_list, function(i, val){
            if(val.id==text || val.first_name.includes(text) || val.last_name.includes(text) || val.email.includes(text)){
                list[list.length] = val;
            }
        });
        return list;
    }

}