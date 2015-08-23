<?php 
include_once('classes.php');

// delete advert
if (isset($_GET['del'])) {
    $id = (int) $_GET['del'];
    Ads::deleteAdvert($id);
}