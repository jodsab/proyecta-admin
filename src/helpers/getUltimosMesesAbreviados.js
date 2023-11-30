import meses from "../constants/meses";

const getUltimosMesesAbreviados = () => {
  const fechaActual = new Date();
  const ultimos6MesesAbreviados = [];

  for (let i = 8; i >= 0; i--) {
    const fecha = new Date(fechaActual);
    fecha.setMonth(fecha.getMonth() - i);
    const nombreAbreviado = meses[fecha.getMonth()].substring(0, 3);
    ultimos6MesesAbreviados.push(nombreAbreviado);
  }

  return ultimos6MesesAbreviados;
};

const nombresUltimosMesesAbreviados = getUltimosMesesAbreviados();

export { nombresUltimosMesesAbreviados };
