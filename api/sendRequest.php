<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers", "*");
header("Access-Control-Allow-Methods", "*");
header("Access-Control-Allow-Credentials", "true");

include "connections.php";

$json = $_POST['json'];
$file = $_POST["file"];
$folderPath = $_POST["folderPath"];

$jsonValue = json_decode($json, true);

var_dump($jsonValue);
$hdr = $jsonValue['header'];
$dtl = $jsonValue['details'];

$studentFirstName = $hdr['FirstName'];
// $studentMiddleName = $hdr['MiddleName'];
$studentLastName = $hdr['LastName'];
$studentPreviousSchool = $hdr['PreviousSchool'];
$studentAge = $hdr['Age'];
$studentGradeLevel = $hdr['GradeLevel'];
$studentAddressStreet = $dtl['AddressStreet'];
$studentAddressBarangay = $dtl['AddressBarangay'];
$studentAddressCity = $dtl['AddressCity'];
$studentPhoneNumber = $dtl['PhoneNumber'];
$studentEmailAddress = $dtl['EmailAddress'];
$studentAddress = $studentAddressStreet.", ".$studentAddressBarangay.", ".$studentAddressCity;

$sql = "INSERT INTO tblstudents (stud_firstname,stud_lastname,stud_age, stud_previousSchool, stud_yearLevel,stud_address,stud_phone,stud_email) VALUES (:studentFirstName, :studentLastName, :studentAge, :studentPreviousSchool, :studentGradeLevel, :studentAddress, :studentPhoneNumber, :studentEmailAddress) ";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':studentFirstName', $studentFirstName);
$stmt->bindParam(':studentLastName', $studentLastName);
$stmt->bindParam(':studentPreviousSchool', $studentPreviousSchool);
$stmt->bindParam(':studentAge', $studentAge);
$stmt->bindParam(':studentGradeLevel', $studentGradeLevel);
$stmt->bindParam(':studentAddress', $studentAddress);
$stmt->bindParam(':studentPhoneNumber', $studentPhoneNumber);
$stmt->bindParam(':studentEmailAddress', $studentEmailAddress);

$stmt->execute();
if ($stmt->rowCount() >= 0) {
    $rs = $stmt->fetch(PDO::FETCH_ASSOC);


}else {
    
}
?>