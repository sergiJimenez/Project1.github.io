<?php
require_once('./../../../../php_library/database.php');

$ciclos = select_ciclos();

print_r($ciclos);
?>