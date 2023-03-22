
export const Timer = ({seconds}) => {

    const minutos = Math.floor(seconds / 60); // 25
    const segundosRestantes = seconds % 60; // 0
    const tiempoFormateado = `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`; // '25:00'

  return (
    <h1 className="text-6xl font-bold text-teal-400 text-center m-5">
      {tiempoFormateado}
    </h1>
    
  )
}
