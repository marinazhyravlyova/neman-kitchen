<?php
$path = 'kitchens/';
$file = $path . $_GET['page'] . '.html';
if(file_exists($file)) include $file;
?>
