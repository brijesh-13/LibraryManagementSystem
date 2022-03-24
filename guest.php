<html lang="en">
<?php
  include "controller/defaults.php";
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guest</title>
    <base href="<?php echo($rootLocation); ?>" target="_self">

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">
    <link href="lib/css/defaults.css" rel="stylesheet" />
    <link href="lib/css/guest_view.css" rel="stylesheet" />
    <link href="lib/css/popup.css" rel="stylesheet" />


    
</head>
<body>
    
    
    <?php   
        include "views/popup.html";
    ?>
    
    <div id="guest-view-content">
      <?php
        include "./views/guest_header.html";
      ?>
      <div id="guest-maincontainer">
        <?php
          include "pages/guest_view.php";
        ?>
      </div>
    </div>






    


    <!-- js files -->
    <script src="lib/includes/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="lib/includes/jquery-ui.js" type="text/javascript"></script>

    <script src="class/Library.js" type="text/javascript"></script>
    <script src="class/Book.js" type="text/javascript"></script>
    <script src="class/Client.js" type="text/javascript"></script>

    <script src="lib/js/colors.js" type="text/javascript"></script>
    <script src="controller/defaults.js" type="text/javascript"></script>

    <script src="controller/js/api_login.js" type="text/javascript"></script>
    <script src="controller/js/api_book.js" type="text/javascript"></script>
    
    <script src="lib/js/guest_view.js" type="text/javascript"></script>
</body>
</html>