<html lang="en">
<?php
  include "controller/defaults.php";
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CP469</title>
    <base href="<?php echo($rootLocation); ?>" target="_self">

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">
    <link href="lib/css/defaults.css" rel="stylesheet" />
    <link href="lib/css/login.css" rel="stylesheet" />


    
</head>
<body>
    
    
    
    <div id="content">
      <?php
        include "pages/login.html";
      ?>
    </div>
    





    


    <!-- js files -->
    <script src="lib/includes/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="lib/includes/jquery-ui.js" type="text/javascript"></script>

    
    <script src="controller/defaults.js" type="text/javascript"></script>

    <script src="controller/js/api_login.js" type="text/javascript"></script>
    
    <script src="lib/js/login.js" type="text/javascript"></script>
    
</body>
</html>