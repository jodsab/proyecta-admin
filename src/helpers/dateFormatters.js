function formatearFecha(fechaString) {
  const fecha = new Date(fechaString);

  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Los meses son indexados desde 0
  const anio = fecha.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${anio}`;

  return fechaFormateada;
}

export { formatearFecha };
