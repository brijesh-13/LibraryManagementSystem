<?php
include '../controller/dbconn.php';


if(isset($_GET['function'])) {

    if($_GET['function'] == 'login'){
        // $email = $_GET['email'];
        // $password = sha1($_GET['password']);
        // $password = $_GET['password'];

        $query = "SELECT * FROM tbl_account";
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
}












// function login($username, $password, $link){
//     $query = "CALL login('$username', '$password')";
//     $rs = mysqli_query($link , $query);

//     if($rs->num_rows > 0){
//         while($row = $rs->fetch_assoc()) {
//             echo( $row['userlevel'] );
//         }
//     }else{
//         echo 'error';
//     }
// }

// if(isset($_GET['function'])) {

//     if($_GET['function'] == 'login') {
//         $email = $_GET['email'];
//         $password = $_GET['password'];

//         login($username, $password, $link);
//     }

//     if($_GET['function'] == 'login'){
//         $email = $_GET['email'];
//         // $password = sha1($_GET['password']);
//         $password = $_GET['password'];

//         $query = "SELECT id FROM tbl_admin WHERE email = '$email' AND `password` = '$password' ";
//         $rs = mysqli_query($link , $query);
//         if(mysqli_num_rows($rs)>0){
//             $x = 0;
//             while($row = $rs->fetch_assoc()) {
//                 $response['id'] = $row['id'];
//                 $x++;
//             }
//             $response['response'] = 'true';
//             $json_response = json_encode($response);
//             echo $json_response;
//             mysqli_close($link);
//         }else{
//             $response['response'] = 'error';
//             $json_response = json_encode($response);
//             echo $json_response;
//             mysqli_close($link);
//         }
//     }
// }

// if(isset($_POST['function'])) {

//     if($_POST['function'] == 'createAdmin') {
//         $id = $_POST['id'];
//         $email = $_POST['email'];
//         $name = $_POST['name'];
//         $access = $_POST['access'];
//         $department = $_POST['department'];
//         $password = sha1($_POST['password']);

//         $query = "INSERT INTO tbl_admin (id, email, `name`, access, department, `password`) VALUES ('$id', '$email', '$name', '$access', '$department', '$password')"; // when you see these red stuff on your query that arent keywords put the `` to them
//         if(mysqli_query($link , $query)){
//             $response['response'] = 'true';
//             $json_response = json_encode($response);
//             echo $json_response;
//             mysqli_close($link);
//         }else{
//             $response['response'] = 'error';
//             $json_response = json_encode($response);
//             echo $json_response;
//             mysqli_close($link);
//         }
//     }

// }

