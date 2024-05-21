import Card from './components/Card'

function App() {

  return (
    <div className='wrapper'>
      <h1>Countdown <span style={{ color: '#ae00ff' }}>Timer</span></h1>
      <form action="" className='form'>
        <input type="datetime-local" name="" id="" />
        <button>Set Countdown</button>
      </form>

      <div className='cards'>
        <Card time={'10'} name={'Days'}/>
        <Card time={'10'} name={'Hours'} />
        <Card time={'10'} name={'Minutes'} />
        <Card time={'10'} name={'Seconds'} />
      </div>
    </div>
  )
}

export default App
