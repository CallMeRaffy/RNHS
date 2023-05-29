<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

class capstone
{

  function getGradeLevel()
  {
    include "connections.php";

    $sql = "SELECT * FROM tblgradelevel ";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
  }
  
  
}


$job = $_POST['job'];
$json = isset($_POST['json']) ? $_POST['json'] : "";

$capstone = new capstone();
switch ($job) {
  case "getGradeLevel":
    echo $capstone->getGradeLevel();
    break;
}