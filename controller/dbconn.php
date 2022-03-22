<?php

  $server = "68.178.221.131";
  $username = "iz18388gasfm";
  $password = "Admin123";
  $dbname = "CP476";

  // Create connection
  $conn = mysqli_connect($server, $username, $password);

  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "Connected successfully";


  
?>