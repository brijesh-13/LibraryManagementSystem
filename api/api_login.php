<?php
include '../controller/dbconn.php';


if(isset($_GET['function'])) {

    if($_GET['function'] == 'check_login'){
        // $password = sha1($_GET['password']);
        $email = $_GET['email'];
        $pass = $_GET['password'];

        $query = "SELECT id,first_name,last_name,email FROM tbl_account WHERE email='$email' AND password = '$pass'; ";
        $rs = mysqli_query($link , $query);
        if(mysqli_num_rows($rs)>0){
            $x = 0;
            while($row = $rs->fetch_assoc()) {
                $response['id'] = $row['id'];
                $response['first_name'] = $row['first_name'];
                $response['last_name'] = $row['last_name'];
                $response['email'] = $row['email'];
                $x++;
            }
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
    
    if($_GET['function'] == 'createAccount') {
        $id = $_GET['id'];
        $email = $_GET['email'];
        $first_name = $_GET['first_name'];
        $last_name = $_GET['last_name'];
        $password = $_GET['password'];

        $query = "insert into tbl_account(id,first_name,last_name,email,password) values('$id','$first_name','$last_name','$email','$password');"; 

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
    
    if($_GET['function'] == 'deleteAccount') {
        $id = $_GET['id'];

        $query = "DELETE FROM tbl_account WHERE id='$id';"; 

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


