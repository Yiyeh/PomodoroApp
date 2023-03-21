import { useState, useEffect } from 'react';
import { Timer } from './components/Timer';
import { Buttons } from './components/Buttons';

function App() {
  const [seconds, setSeconds] = useState(1500);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const onPlay = () => setIsPlaying(true)
  const onStop = () => setIsPlaying(false)
  const onRestart = () => setSeconds(1500)

  useEffect(() => {
    let intervalId;
    isPlaying && (intervalId = setInterval(() => setSeconds((prevSeconds) => prevSeconds - 1), 1000));
    return () => clearInterval(intervalId);  
  }, [isPlaying]);


  return (
    <>
      <h1>Pomodoro App</h1>
      <Timer seconds={seconds} />
      <div className='buttonsContainer'>
        <Buttons text={'Play'} onPress={onPlay} />
        <Buttons text={'Stop'} onPress={onStop} />
        <Buttons text={'Restart'} onPress={onRestart} />
      </div>
    </>
  );
}

export default App;
