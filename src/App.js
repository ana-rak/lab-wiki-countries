import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
  <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<CountriesList countries={countries}/>} />
    </Routes>
  </div>
  )
}
export default App;
