import { useEffect, useState } from 'react'
import Card from './components/Card'

function App() {

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimesUp, setIsTimesUp] = useState(false);
  const [isTimesOK, setIsTimesOK] = useState(true);

  const [countdown, setCountdown] = useState('');
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [timerId, setTimerId] = useState(0);

  const handleChange = (e) => {
    setIsTimesUp(false);
    setIsTimesOK(true);
    setCountdown(e.target.value);
  }

  const setTimer = (e) => {
    e.preventDefault();

    let timer = setInterval(() => {
      let difference = new Date(countdown).getTime() - new Date().getTime()

      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      if (days > 100) {
        setIsTimesOK(false);
        clearInterval(timer);
        return;
      }
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setRemaining({
        days,
        hours,
        minutes,
        seconds
      });
      setIsTimerRunning(true);

      if (difference < 0) {
        clearInterval(timer);
        setIsTimesUp(true);
        setIsTimerRunning(false);
        <Audio />
        setRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);
    setTimerId(timer);
  }

  const clearTimer = (e) => {
    e.preventDefault();
    clearInterval(timerId);
    setRemaining({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    setIsTimerRunning(false);
  }

  useEffect(() => {
    console.log(remaining);
  }, [remaining]);

  return (
    <div className='wrapper'>
      <h1>Countdown <span style={{ color: '#ae00ff' }}>Timer</span></h1>
      <form action="" className='form'>
        <input type="datetime-local" name="timer" onChange={(e) => handleChange(e)} />
        <button onClick={isTimerRunning ? (e) => clearTimer(e) : (e) => setTimer(e)}>{isTimerRunning ? 'Cancel Timer' : 'Start Timer'}</button>
      </form>

      {
        isTimesUp ? (<>
          <p className='para'>🎉 The countdown is over! What's next on your adventure? 🎉</p>
          <audio src='/thend.mp3' autoPlay></audio>
        </>) : isTimesOK ? (
          <div className='cards'>
            <Card time={remaining.days} name={'Days'} />
            <Card time={remaining.hours} name={'Hours'} />
            <Card time={remaining.minutes} name={'Minutes'} />
            <Card time={remaining.seconds} name={'Seconds'} />
          </div>
        ) : (<p className='para'>Selected time is more than 100 days</p>)
      }
    </div>
  )
}

export default App
