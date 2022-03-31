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
    
    if($_GET['function'] == 'addBook') {
        $id = $_GET['id'];
        $title = $_GET['title'];
        $author = $_GET['author'];
        $year = intval($_GET['year']);
        $qty = intval($_GET['qty']);
        $description = $_GET['description'];
        $image = $_GET['image'];
        $client_id = $_GET['client_id'];

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
    
    if($_GET['function'] == 'updateBook') {
        $id = $_GET['id'];
        $title = $_GET['title'];
        $author = $_GET['author'];
        $year = $_GET['year'];
        $qty = $_GET['qty'];
        $description = $_GET['description'];
        $image = $_GET['image'];
        $client_id = $_GET['client_id'];

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

    if($_GET['function'] == 'deleteBook') {
        $id = $_GET['id'];

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






