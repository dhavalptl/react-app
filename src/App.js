import React, {useState} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('No Message :(');
  const fetchMessage = () => {
    fetch('http://localhost:4100')
    .then(res => res.json())
    .then(data => setMessage(data.msg))
    .catch(error => {
      console.error('Error while communicating to server', error);
    });
  }
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Response from server : {message}
        </p>
        <button onClick={fetchMessage} className="fetch-btn">Fetch message from server</button>
      </div>
    </div>
  );
}

export default App;
