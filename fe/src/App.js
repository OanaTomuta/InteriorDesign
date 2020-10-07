import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [ response, setResponse ] = useState('PLACEHOLDER');

  useEffect(() => { //conditie de a nu repeta randarea
    (async () => fetch('/appointments')
        .then(httpResponse => httpResponse.json())
        .then(text => setResponse(text)))();
  }, []); //astea sunt conditiile pt a nu se repeta

  console.log(response);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          Array.isArray(response) ?
          response.map( (element) => {
              return (
                  <p>
                    {element.first_name},
                    {element.last_name}
                  </p>
              )
          }) : '' //else leave empty
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
