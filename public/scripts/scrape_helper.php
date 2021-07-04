<?php

$scraper = "/var/www/html/scraper.py";
$url = $_POST["address"];
$command = "python3 ".$scraper." ".$url;
echo $command;
exec($command, $output);
//header("Location: ../scraper.html");

?>
