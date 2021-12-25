import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import shajs from 'sha.js';

function App() {

  const [ salt, setSalt ] = useState('salt');
  const [ message, setMessage ] = useState('message');

  const digest = shajs('sha256').update(
    (salt || '')
    + (message || '')
  ).digest('hex')

  const onSaltChangeHandler = (e) => {
    setSalt(e.target.value);
  }

  const onMessageChangeHandler = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message</h1>
        <p>
          <input value={message} onChange={onMessageChangeHandler} />
        </p>
        <h1>Salt</h1>
        <p>
          <input value={salt} onChange={onSaltChangeHandler} />
        </p>
        <h1>Digest</h1>
        <p class="digest">
          {digest}
        </p>
      </header>
    </div>
  );
}

export default App;
