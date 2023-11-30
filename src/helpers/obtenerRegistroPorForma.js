import meses from "../constants/meses";

function obtenerRegistrosPorForma(datos, forma) {
  // Obtener el mes actual
  const mesActual = new Date().getMonth();

  // Inicializar un objeto para contar la cantidad de objetos por mes
  const conteoPorMes = {};
  meses.forEach((mes) => {
    conteoPorMes[mes] = 0;
  });

  // Contar la cantidad de objetos para cada mes
  datos.forEach((objeto) => {
    const fechaRegistro = new Date(objeto.fecha_de_registro);
    const mes = meses[fechaRegistro.getMonth()];
    objeto.id_forma_de_registro === forma && conteoPorMes[mes]++;
  });

  // Crear un array con el resultado respetando el orden de los últimos 9 meses
  const resultado = meses.slice(0, -3).map((mes, index) => {
    // Utilizar el mes actual en la última posición del resultado
    return index === 8 ? conteoPorMes[meses[mesActual]] : conteoPorMes[mes];
  });

  return resultado;
}

export { obtenerRegistrosPorForma };
