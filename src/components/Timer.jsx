
export const Timer = ({seconds}) => {

    const minutos = Math.floor(seconds / 60); // 25
    const segundosRestantes = seconds % 60; // 0
    const tiempoFormateado = `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`; // '25:00'

  return (
    <h1 className="timer">{tiempoFormateado}</h1>
  )
}
