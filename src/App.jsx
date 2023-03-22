import { useState, useEffect } from 'react';
import { Timer } from './components/Timer';
import { Buttons } from './components/Buttons';
import soundFile from './sound/ding.mp3';


function App() {

  const audio = new Audio(soundFile);

  let initialSeconds = 1500;
  let restSeconds = 300;

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
    audio.play();
  } else if ( !isFocusing && seconds <= 0){
    setIsFocusing(true);
    setSeconds(initialSeconds);
    audio.play();
  }

  return (
    <div >
      <h1 className='text-white text-6xl text-center font-bold'>Pomodoro App</h1>
      <Timer seconds={seconds} isFocusing={isFocusing} />
      
      {isFocusing?
        <h2 className=' text-orange-500 text-center font-bold text-3xl ' > Happy Working! 💻</h2>:
        <h2 className=' text-green-600 text-center font-bold text-3xl '> Take a break! ☕</h2>
      }

      <div className=' flex justify-center mt-3' >
        <Buttons text={'Play'} onPress={onPlay} />
        <Buttons text={'Pause'} onPress={onStop} />
        <Buttons text={'Restart'} onPress={onRestart} />
      </div>
      <footer className="flex justify-center mt-5 text-white">
        Pomodoro App by <a href="https://github.com/Yiyeh" className="mx-2 text-teal-500 font-bold">Yiyeh</a>
      </footer>
    </div>
  );
}

export default App;
