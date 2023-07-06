let updated = false;


function enviarRespuesta() {
    var xhr = new XMLHttpRequest();
    var url = "https://prod-19.brazilsouth.logic.azure.com:443/workflows/b871c824c27349e48cf15878fdc9a61f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qa97c2BOgEry_28qL2uF-qdq2pST1GCVVhs61nDaaa8"; // Reemplaza esto con la URL de tu desencadenador HTTP en Power Automate
    var selectedOption = document.querySelector('input[name="tipo"]:checked').value;
    document.getElementById('loadingIndicator').style.display = 'block';
    var data = JSON.stringify({
        respuesta: selectedOption
    });

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var respuesta = JSON.parse(xhr.responseText);
        console.log(respuesta);
        document.getElementById('loadingIndicator').style.display = 'none';
        var respuestaContainer = document.getElementById("respuestaContainer");
        respuestaContainer.innerHTML = 
                                        `
                                            <div class="panel-heading">Resumen</div>
                                            <div class="panel-body">${respuesta.ftp.prioridades}: ${respuesta.resumen.prioridades} - carga: ${respuesta.tiempo.prioridades}</div>
                                            <div class="panel-body">${respuesta.ftp.pagos}: ${respuesta.resumen.pagos} - carga: ${respuesta.tiempo.pagos}</div>
                                            <div class="panel-body">${respuesta.ftp.reneRef}: ${respuesta.resumen.reneRef} - carga: ${respuesta.tiempo.reneRef}</div>
                                        `
      
        // Procesa la respuesta aquí, por ejemplo, actualizando el DOM o almacenándola en una variable
      }
    };
  
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    // Reemplaza esto con los datos que deseas enviar en formato JSON
    // var data = JSON.stringify({
    //   "MessageSubject": "Asunto del mensaje",
    //   "MessageBody": "Cuerpo del mensaje"
    // });
  
    xhr.send(data);
    // obtenerFecha();
  }

  function UpdatePowerBi(){
    if (updated){
      revisarRespuesta();
    } else {
    var xhr = new XMLHttpRequest();
    var url = "https://prod-09.brazilsouth.logic.azure.com:443/workflows/1cded6dc2a7740c9aca72ca89c03624b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Yg0eAqd8zlyeH4WzSVY1LYCBQrD7sp1iNGjhJa9MAVE"; // Reemplaza esto con la URL de tu desencadenador HTTP en Power Automate
    document.getElementById('loadingIndicatorPower').style.display = 'block';
    revisarRespuesta();
    var data = JSON.stringify({
      respuesta: "respuesta"
  });
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var respuesta = xhr.responseText;
        console.log(respuesta);
        updated = true;
        // revisarRespuesta();
        document.getElementById('loadingIndicatorPower').style.display = 'none';

        
        // Procesa la respuesta aquí, por ejemplo, actualizando el DOM o almacenándola en una variable
      }
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.send(data);
  }
  }
  
function procesarRespuesta() {
    var xhr = new XMLHttpRequest();
    var url = "https://prod-10.brazilsouth.logic.azure.com:443/workflows/24db2c38aabd4da59e9653e0f3dae078/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Y2IohaYsj0MI1nokXfY0yCrjv4EmwU7khH09v6frIpI"; // Reemplaza esto con la URL de tu desencadenador HTTP en Power Automate
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('loadingIndicator').style.display = 'block';
    var selectedOption = document.querySelector('input[name="tipo"]:checked').value;
    var data = JSON.stringify({
        respuesta: selectedOption
    });

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var respuesta = JSON.parse(xhr.responseText);
        console.log(respuesta);
        var alerta = document.getElementById("alerta");
        alerta.innerHTML = `<div class="alert alert-success">
                                 <strong>Validación exitosa, duración: ${respuesta.tiempo}s </strong> - Archivos cargados en FTP
                            </div>`;
        document.getElementById('myForm').style.display = 'none';
        var proceso = document.getElementById("proceso");
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('revisar').style.display = 'block';
        document.getElementById('regresar').style.display = 'block';
        proceso.style.display = 'block';
        var respuestaContainer = document.getElementById("respuestaProceso");
        respuestaContainer.innerHTML = 
                                        `
                                            <div class="panel-heading">Resumen</div>
                                            <div class="panel-body">Estado: ${respuesta.resumen.estado}</div>
                                            <div class="panel-body">Total Base: ${respuesta.resumen.totalBase}</div>
                                            <div class="panel-body">Sin Telefonos: ${respuesta.resumen.sinTelefonos}</div>
                                            <div class="panel-body">Promesas Vigentes: ${respuesta.resumen.promesasVigentes}</div>
                                            <div class="panel-body">Promesas Rotas: ${respuesta.resumen.promesasRotas}</div>
                                            <div class="panel-body">Bot Fernanda: ${respuesta.resumen.botFernanda}</div>
                                            <div class="panel-body">Campaña T00: ${respuesta.resumen.campanaT00}</div>
                                            <div class="panel-body">Carga total Vigente: ${respuesta.resumen.cargaTotalVigente}</div>
                                        `
        // Procesa la respuesta aquí, por ejemplo, actualizando el DOM o almacenándola en una variable
      }
    };
  
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    // Reemplaza esto con los datos que deseas enviar en formato JSON
    // var data = JSON.stringify({
    //   "MessageSubject": "Asunto del mensaje",
    //   "MessageBody": "Cuerpo del mensaje"
    // });
  
    xhr.send(data);
  }

  function revisarRespuesta(){
    const dash = document.getElementById('dash');
    dash.classList.toggle('open');
  }

  function regresar(){
    updated = false;
    document.getElementById('myForm').style.display = 'block';
    var proceso = document.getElementById("proceso");
    document.getElementById('revisar').style.display = 'none';
    proceso.style.display = 'none';
    document.getElementById('regresar').style.display = 'none';
    document.getElementById('alerta').style.display = 'none';
    const dash = document.getElementById('dash');
    dash.className = 'container dash';

  }