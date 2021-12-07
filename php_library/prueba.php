<?php include_once 'php_library/database.php' ?>
<?php
$select = mysqli_query($db, "SELECT * FROM `ciclos`");
$result = $conn->query($select);

while ($row = $select->fetch_assoc()) {
    echo "<br> id: " . $row["id"] . " - Name: " . $row["Abr_Ciclos"] . " " . $row["Nombre_Ciclos"] . "<br>";
}
?>