$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener el valor seleccionado del radio button
        var status = $("input[name='status']:checked").val();

        // Enviar una solicitud AJAX al archivo proceso1.py
        $.post("proceso1.py", {status: status}, function(data) {
            // Manipular el resultado recibido y actualizar el contenido HTML
            console.log(data)
            var resultado = JSON.parse(data);
            $("#resultadoContainer").html("Prioridades: " + resultado.Prioridades + "<br>" +
                                          "Pagos: " + resultado.Pagos + "<br>" +
                                          "ReneRef: " + resultado.ReneRef);
        });
    });
});