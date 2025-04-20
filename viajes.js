const destinos = [];

const calcularCosto = (destino, transporte, personas) => {
  let costoBase = 0;

  switch (destino) {
    case "Paris": costoBase = 500; break;
    case "Londres": costoBase = 400; break;
    case "New York": costoBase = 600; break;
    default: costoBase = 300;
  }

  if (transporte === "Avión") costoBase += 200;
  if (transporte === "Tren") costoBase += 100;

  let total = costoBase * personas;

  // Descuento si hay 4 o más personas
  if (personas >= 4) {
    total *= 0.9;
  }

  return total;
};

const registrarDestino = (destino, fecha, transporte, personas) => {
  const viaje = {
    destino,
    fecha,
    transporte,
    personas,
    costo: calcularCosto(destino, transporte, personas)
  };
  destinos.push(viaje);
};

const mostrarItinerario = () => {
  const contenedor = document.getElementById("itinerario");
  contenedor.innerHTML = "";

  destinos.forEach((viaje, index) => {
    const viajeHTML = `
      <div>
        <h3>Viaje #${index + 1}</h3>
        <p><strong>Destino:</strong> ${viaje.destino}</p>
        <p><strong>Fecha:</strong> ${viaje.fecha}</p>
        <p><strong>Transporte:</strong> ${viaje.transporte}</p>
        <p><strong>Personas:</strong> ${viaje.personas}</p>
        <p><strong>Costo Total:</strong> $${viaje.costo}</p>
        <hr>
      </div>
    `;
    contenedor.innerHTML += viajeHTML;
  });
};
