


class Client{

    constructor(client_obj) {
        // define attributes of Client class here, client_obj has details of the client
        
        this.id = client_obj.id;
        this.email = client_obj.email;
        this.first_name = client_obj.first_name;
        this.last_name = client_obj.last_name;
        this.password = client_obj.password;
    }

    /*
        you can add functions of the client class below here...
    */

    update(client_obj){
        this.email = client_obj.email;
        this.first_name = client_obj.first_name;
        this.last_name = client_obj.last_name;
        this.password = client_obj.password;
    }
}