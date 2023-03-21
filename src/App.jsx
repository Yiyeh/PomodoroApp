import { useState, useEffect } from 'react';
import { Timer } from './components/Timer';
import { Buttons } from './components/Buttons';

function App() {

  let initialSeconds = 10;
  let restSeconds = 5;

  const [seconds, setSeconds] = useState(initialSeconds);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFocusing, setIsFocusing] = useState(true);
  
  const onPlay = () => setIsPlaying(true)
  const onStop = () => setIsPlaying(false)
  const onRestart = () => {setSeconds(initialSeconds); setIsFocusing(true); } 

  useEffect(() => {
    let intervalId;
    isPlaying && (intervalId = setInterval(() => setSeconds((actualSeconds) => actualSeconds - 1), 1000));

    return () => clearInterval(intervalId);  
  }, [isPlaying]);

  if (isFocusing && seconds <= 0){
    setIsFocusing(false);
    setSeconds(restSeconds);
    console.log('cambiando a descanso');
  } else if ( !isFocusing && seconds <= 0){
    setIsFocusing(true);
    setSeconds(initialSeconds);
    console.log('cambiando a trabajo');
  }


  return (
    <>
      <h1>Pomodoro App</h1>
      <Timer seconds={seconds} />
      {isFocusing?
        <h2>Happy Working!</h2>:
        <h2>Rest!</h2>
      }
      <div className='buttonsContainer'>
        <Buttons text={'Play'} onPress={onPlay} />
        <Buttons text={'Pause'} onPress={onStop} />
        <Buttons text={'Restart'} onPress={onRestart} />
      </div>
    </>
  );
}

export default App;
