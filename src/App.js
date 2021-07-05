import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DisplayEmployee from './components/DisplayEmployee';
import {useState} from 'react'

function App() {
  const [quote, setQuote] = useState({});
  const getEmployee = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  };
  
  return (
    <div className="App">
     <DisplayEmployee quote={quote} />
     <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
