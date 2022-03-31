<?php
include '../controller/dbconn.php';


if(isset($_GET['function'])) {

    if($_GET['function'] == 'fetchBooks'){
        $query = "select * from tbl_book";
        $stmt = mysqli_prepare($link , $query);

        if(mysqli_stmt_execute($stmt)){
            $x = 0;
            $result = mysqli_stmt_get_result($stmt);
            while($row = mysqli_fetch_array($result, MYSQLI_NUM)) {
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
    
}





if(isset($_POST['function'])) {
    if($_POST['function'] == 'addBook') {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $author = $_POST['author'];
        $year = intval($_POST['year']);
        $qty = intval($_POST['qty']);
        $description = $_POST['description'];
        $image = $_POST['image'];
        $client_id = $_POST['client_id'];

        $query = "insert into tbl_book(id,title,author,year,qty,description,image,client_id) values(?,?,?,?,?,?,?,?)"; 
        $stmt = mysqli_prepare($link , $query);
        mysqli_stmt_bind_param($stmt, "sssiisss", $id, $title, $author, $year, $qty, $description, $image, $client_id);
        

        if(mysqli_stmt_execute($stmt)){
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
    
    if($_POST['function'] == 'updateBook') {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $author = $_POST['author'];
        $year = $_POST['year'];
        $qty = $_POST['qty'];
        $description = $_POST['description'];
        $image = $_POST['image'];
        $client_id = $_POST['client_id'];

        $query = "update tbl_book set title = ?, author =?, year = ?, qty = ?, description =?, image = ?, client_id =? where id=?"; 
        $stmt = mysqli_prepare($link , $query);
        mysqli_stmt_bind_param($stmt, "ssiissss", $title, $author, $year, $qty, $description, $image, $client_id, $id);

        if(mysqli_stmt_execute($stmt)){
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

    if($_POST['function'] == 'deleteBook') {
        $id = $_POST['id'];

        $query = "delete from tbl_book where id=?"; 
        $stmt = mysqli_prepare($link , $query);
        mysqli_stmt_bind_param($stmt, "s", $id);

        if(mysqli_stmt_execute($stmt)){
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


