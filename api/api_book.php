<?php
include '../controller/dbconn.php';


if(isset($_GET['function'])) {

    if($_GET['function'] == 'fetchBooks'){
        $query = "select * from tbl_book; ";
        
        $rs = mysqli_query($link , $query);
        if(mysqli_num_rows($rs)>0){
            $x = 0;
            while($row = $rs->fetch_assoc()) {
                $response[$x]['id'] = $row['id'];
                $response[$x]['title'] = $row['title'];
                $response[$x]['author'] = $row['author'];
                $response[$x]['year'] = $row['year'];
                $response[$x]['qty'] = $row['qty'];
                $response[$x]['description'] = $row['description'];
                $response[$x]['image'] = $row['image'];
                $response[$x]['client_id'] = $row['client_id'];
                $x++;
            }

            // $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }
    }
    
    if($_GET['function'] == 'addBook') {
        $id = $_GET['id'];
        $title = $_GET['title'];
        $author = $_GET['author'];
        $year = intval($_GET['year']);
        $qty = intval($_GET['qty']);
        $description = $_GET['description'];
        $image = $_GET['image'];
        $client_id = $_GET['client_id'];

        $query = "insert into tbl_book(id,title,author,year,qty,description,image,client_id) values('$id','$title','$author',$year,$qty,'$description','$image','$client_id');"; 

        if(mysqli_query($link , $query)){
            $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }
    }
    
    if($_GET['function'] == 'updateBook') {
        $id = $_GET['id'];
        $title = $_GET['title'];
        $author = $_GET['author'];
        $year = $_GET['year'];
        $qty = $_GET['qty'];
        $description = $_GET['description'];
        $image = $_GET['image'];
        $client_id = $_GET['client_id'];

        $query = "update tbl_book set title = '$title', author = '$author', year = $year, qty = $qty, description = '$description', image = '$image', client_id = '$client_id' where id='$id';"; 

        if(mysqli_query($link , $query)){
            $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }
    }

    if($_GET['function'] == 'deleteBook') {
        $id = $_GET['id'];

        $query = "delete from tbl_book where id='$id';"; 

        if(mysqli_query($link , $query)){
            $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_close($link);
        }
    }
}






