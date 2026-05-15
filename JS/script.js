function mostrarTiempo() {
  const ahora = new Date();
  
  // Aca es para poner la fecha actual
  const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
  document.getElementById('fecha').innerText = ahora.toLocaleDateString('es-ES', opcionesFecha);
  
  // Configuracion del formato de la hora
  let hours = ahora.getHours();
  let minutes = ahora.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  document.getElementById('hora').innerText = hours + ':' + minutes + ' ' + ampm;
}


mostrarTiempo();

// Actualiza cada 1000 milisegundos
setInterval(mostrarTiempo, 1000);

  chattable.initialize();



  