document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const transporte = document.getElementById("transporte").value;
    const personas = parseInt(document.getElementById("personas").value);
  
    registrarDestino(destino, fecha, transporte, personas);
    mostrarItinerario();
  
    this.reset();
  });
  