import logo from './red-heart-icon.svg';
import './App.css';
import { useState } from 'react';
import { sendResult } from './App.action';
function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenThinking, setIsHiddenThinking] = useState(false);
  const [isHiddenReject, setIsHiddenReject] = useState(false);
  const [isHiddenResult, setIsHiddenResult] = useState(true)
  const handleConfirm = () => {
    sendResult('Yes')
    setIsHiddenResult(false)
    setIsHidden(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <a onClick={() => setIsHidden(false)}>
          <img
            src={logo}
            className="App-logo"
            alt="logo" />
        </a>
        <div className='text-input' hidden={isHiddenResult}>
          I'm your! And you are mine <img src={logo} className="App-logo-mini" alt="logo" />!! Thanks you!!!!
        </div>
        <div className='text-input' hidden={isHidden}>
          <p>
            Do you <img src={logo} className="App-logo-mini" alt="logo" /> me?
          </p>
          <button onClick={() => handleConfirm()} className='button-confirm'>Yes &#128151;</button>
          <button hidden={isHiddenThinking} className='button-waiting' >
            <a onClick={() => {
              setIsHiddenThinking(true)
              sendResult('Thinking...')
            }} style={{ color: '#fff', textDecoration: 'none' }} href='https://www.facebook.com/tranduynhan.404/posts/pfbid022mvRgHA9mmEnb3X8iWnajeZxr1ARUDhbmeFErTYM6SekfM2HpqB6dDaD3569sNGfl' target={'_blank'}>Thinking... &#129300;</a>
          </button>
          <button hidden={isHiddenReject} onMouseEnter={() => setIsHiddenReject(true)} className='button-reject' >No &#128557;</button>
        </div>
      </header>
    </div>
  );
}
export default App;