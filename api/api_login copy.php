<?php
include '../controller/dbconn.php';


if(isset($_GET['function'])) {
    
    if($_GET['function'] == 'fetchAccounts'){
        $query = "select * from tbl_account ";
        
        $stmt = mysqli_prepare($link , $query);

        if(mysqli_stmt_execute($stmt)){
            $x = 0;
            $result = mysqli_stmt_get_result($stmt);
            while($row = mysqli_fetch_array($result, MYSQLI_NUM)) {
                $response[$x]['id'] = $row['id'];
                $response[$x]['email'] = $row['email'];
                $response[$x]['first_name'] = $row['first_name'];
                $response[$x]['last_name'] = $row['last_name'];
                $response[$x]['password'] = $row['password'];
                $x++;
            }

            // $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }
    }

}

if(isset($_POST['function'])) {
    if($_POST['function'] == 'check_login'){
        $email = $_POST['email'];
        $pass = $_POST['password'];

        $query = "SELECT id,first_name,last_name,email FROM tbl_account WHERE email=? AND password=?";
        $stmt = mysqli_prepare($link , $query);
        mysqli_stmt_bind_param($stmt, "ss", $email, $pass);
        
        if(mysqli_stmt_execute($stmt)){
            $x = 0;
            $result = mysqli_stmt_get_result($stmt);
            while($row = mysqli_fetch_array($result, MYSQLI_NUM)) {
                $response['id'] = $row['id'];
                $response['first_name'] = $row['first_name'];
                $response['last_name'] = $row['last_name'];
                $response['email'] = $row['email'];
                $x++;
            }
            $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }
    }
    if($_POST['function'] == 'createAccount') {
        $id = $_POST['id'];
        $email = $_POST['email'];
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $password = $_POST['password'];

        $query = "insert into tbl_account(id,first_name,last_name,email,password) values(?,?,?,?,?);"; 
        $stmt = mysqli_prepare($link , $query);
        mysqli_stmt_bind_param($stmt, "sssss", $id, $email, $first_name, $last_name, $password);

        if(mysqli_stmt_execute($stmt)){
            $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }
    }
    if($_POST['function'] == 'updateAccount') {
        $id = $_POST['id'];
        $email = $_POST['email'];
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $password = $_POST['password'];

        $query = "update tbl_account set first_name=?, last_name=?, email=?, password=? where id=?;"; 
        $stmt = mysqli_prepare($link , $query);
        mysqli_stmt_bind_param($stmt, "sssss", $email, $first_name, $last_name, $password, $id);

        if(mysqli_stmt_execute($stmt)){
            $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }
    }
    if($_POST['function'] == 'deleteAccount') {
        $id = $_POST['id'];

        $query = "DELETE FROM tbl_account WHERE id='$id';"; 

        if(mysqli_stmt_execute($stmt)){
            $response['response'] = 'true';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }else{
            $response['response'] = 'error';
            $json_response = json_encode($response);
            echo $json_response;
            mysqli_stmt_close($stmt);
        }
    }
}
