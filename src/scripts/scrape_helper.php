<?php

$scraper = "/home/colin/killer.recipes/scraper.py";
$url = $_POST["address"];
exec("python3 ".$scraper." ".$url);

?>
