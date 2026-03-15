function mostrarTiempo() {
    const ahora = new Date();
    
 
    const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('fecha').innerText = ahora.toLocaleDateString('es-ES', opcionesFecha);
    
   
    document.getElementById('hora').innerText = ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }
  

  mostrarTiempo();


  chattable.initialize();