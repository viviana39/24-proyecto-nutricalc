<?php
// Conexión a la base de datos MySQL
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password,   
 $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); 

}

// Obtener las calorías de los datos POST
$calories = $_POST['calories'];

// Agregar los datos a la base de datos
$sql = "INSERT INTO calorieen (calorieen) VALUES ('$calories')";

if ($conn->query($sql) === TRUE) {
    echo "Calorías guardadas exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>