<?php
$order = $_POST['send'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$strt = $_POST['strt'];
$hse = $_POST['hse'];
$apart = $_POST['apart'];
$entre = $_POST['entre'];
$floor = $_POST['floor'];
$sum = $_POST['sum'];
$mysql = new mysqli('localhost', 'root', 'root', 'users');
$mysql -> query("SET NAMES 'utf8'");
foreach($order as $value => $key){
    $ordName = $key["name"];
    $ordBil = $key["bil"];
    $mysql -> query("INSERT INTO `users_info` (`name`, `telephone`, `street`, `house`, `apartment`, `entrance`, `floor`, `price`, `order`, `bil`) VALUES('$name', '$tel', '$strt', '$hse', '$apart', '$entre', '$floor', '$sum', '$ordName', '$ordBil')");
}
$mysql->close();
$mes = $name . $tel . $strt . $hse . $apart . $entre . $floor . $sum;
mail("aleksandrraidenko@mail.ru", "New order", $mes, "");
$new_url = 'index.html';
header('Location: '.$new_url);
exit();