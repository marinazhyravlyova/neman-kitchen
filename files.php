<?php
$path = 'reviews/';
$file = $path . $_GET['page'] . '.html';
if(file_exists($file)) include $file;
?>
