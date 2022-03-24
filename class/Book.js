


class Book{

    constructor(book_obj) {
        // define attributes of Book class here, book_obj has details of the book
       this.id = book_obj.id;
       this.title = book_obj.title;
       this.author = book_obj.author;
       this.year = parseInt(book_obj.year);
       this.qty = parseInt(book_obj.qty);
       this.description = book_obj.description;
       this.image = book_obj.image;
       this.client_id = book_obj.client_id;
    }

    /*
        you can add functions of the book class below here...
    */

    update(book_obj){
        this.title = book_obj.title;
        this.author = book_obj.author;
        this.year = parseInt(book_obj.year);
        this.qty = parseInt(book_obj.qty);
        this.description = book_obj.description;
        this.image = book_obj.image;
        this.client_id = book_obj.client_id;
    }

}