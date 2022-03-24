<?php

$server = "localhost:3306";
$username = "bijju";
$password = "Pass1";
$dbname = "cp476";



  // Create connection
  $link = mysqli_connect($server, $username, $password, $dbname);

  // Check connection
  if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
  }


  
?>