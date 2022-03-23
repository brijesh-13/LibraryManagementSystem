

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
    }

    /*
        you can add functions of the library class below here...
    */

        addBook(newBook){
            //this funnction adds a new book to this.book_list
            //newBook would be a list object containing details of the book class
        }
        removeBook(newBook){
            //this funnction adds a new book to this.book_list
            //newBook would be a list object containing details of the book class
        }

}