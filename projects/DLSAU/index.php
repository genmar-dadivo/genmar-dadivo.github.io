<?php
    session_start();
    date_default_timezone_set("Asia/Manila");
    $datetimenow = date('YmdHis');
    //if (isset($_SESSION['zcars_auth']) ) { echo "<script type='text/javascript'> window.location = 'content/pages' </script>"; }
?>
<!doctype html>
<html lang="en">
   	<head>
    	<meta charset="utf-8">
      	<meta name="viewport" content="width=device-width, initial-scale=1">
      	<!-- Bootstrap CSS -->
      	<link href="assets/css/bs/bootstrap.min.css" rel="stylesheet">
      	<!-- Animate CSS -->
      	<link href="assets/css/animate/animate.min.css" rel="stylesheet">
      	<!-- OS CSS -->
      	<link href="assets/css/os/css/OverlayScrollbars.min.css" rel="stylesheet">
      	<!-- Custom CSS -->
      	<link href="assets/css/custom/custom.css" rel="stylesheet">
      	<link rel="icon" href="assets/img/logo.png" type="image/gif" sizes="30x30">
      	<title>DLSAU | Chatbot</title>
    </head>
    <body>
        <div class="container-loading">
            <span class="title">
            <img src="assets/img/logotext.png" class="img-fluid">
            </span>
        </div>
        <nav class="navbar fixed-top shadow" style="z-index: 1; background-color: #164943;">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 ms-5 h1">
                    <img src="assets/img/logotext.png" style="width: 320px;">
                </span>
            </div>
        </nav>
        <footer>footer</footer>
      	<!-- Bootstrap JS -->
      	<script src="assets/js/bs/bootstrap.min.js"></script>
      	<!-- JQuery -->
      	<script src="assets/js/jquery/jquery-3.5.1.min.js"></script>
      	<!-- OS JS -->
      	<script src="assets/js/os/OverlayScrollbars.min.js"></script>
      	<script src="assets/js/os/jquery.overlayScrollbars.min.js"></script>
      	<!-- Popper JS -->
      	<script src="assets/js/popper/popper.min.js"></script>
      	<!-- Push JS -->
      	<script src="assets/js/push/push.min.js"></script>
	  	<!-- Custom JS -->
      	<script src="assets/js/cookie/js.cookie.min.js"></script>
		<!-- Custom JS -->
      	<script src="assets/js/custom/custom.js"></script>
   </body>
</html>
