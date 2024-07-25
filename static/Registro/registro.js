
/*<!DOCTYPE html>
<html>
<head>
    <title>registros  de usuarios</title>
</head>
<body>
    <form id="myForm">
        <input type="text" name="nombre" id="nombre">
        <button type="submit">Enviar</button>
    </form>

    <script>
        const form = document.getElementById('myForm');

        form.addEventListener('submit', (event) =>{
            event.preventDefault(); // Evita el envío del formulario por defecto

            const nombre = document.getElementById('nombre').value;

            fetch('tu_script_php.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `nombre=${nombre}`
            })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Manejar la respuesta del servidor
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    </script>
</body>
</html>*/
