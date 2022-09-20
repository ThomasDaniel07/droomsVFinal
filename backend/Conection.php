<?php

//INCLUDE A GLOBAL CONFIG OF THE DB

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");

require_once('./configDB.php');

$conection = mysqli_connect(HOSTNAME,USERNAME,PASSWORD,DB);

$json = file_get_contents('php://input');

$object = json_decode($json,true);

$user = $object['user'];

$entity = $object['entity'];

$password = $object['password'];

$sql_Query = "SELECT * FROM users WHERE users = '$user' AND password = '$password'";

$verification = mysqli_fetch_array(mysqli_query($conection,$sql_Query));

if (isset($verification)) {
    $successLoginMsg = 'Data matched';

    $successLoginJson = json_encode(array('STATUS'=>true,'INFO'=>$successLoginMsg, 'ENTITYS'=>$verification['entitys']));

    echo $successLoginJson;

}else {
    $InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
    $InvalidMSGJSon = json_encode(array('STATUS'=>false,'ERROR'=>$InvalidMSG));
 
    echo $InvalidMSGJSon ;

}

mysqli_close($conection);

?>

