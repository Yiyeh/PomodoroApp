import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Timer = ({seconds, isFocusing}) => {

    const minutos = Math.floor(seconds / 60); // 25
    const segundosRestantes = seconds % 60; // 0
    const tiempoFormateado = `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;

    const [percentage, setPercentage] = useState(100)

    useEffect(() => {
        if (isFocusing){
          const remaining = (seconds / 1500) * 100;
          setPercentage(remaining);
        }else{
          const remaining = (seconds / 300) * 100;
          setPercentage(remaining);
        }    
    }, [seconds])
  
  return (
  
    <div className="relative p-10">
      <CircularProgressbar
        value={percentage}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: `rgba(255, 255, 255, ${tiempoFormateado / 100})`,
          trailColor: '#555',
        })}
        
      />
      <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-teal-400">
        {tiempoFormateado}
      </div>  
    </div> 
   
  )
}
