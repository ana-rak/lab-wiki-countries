import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const apiURL= 'https://ih-countries-api.herokuapp.com/countries'

function CountriesList() {
    const [countries, setCountries] = useState([]);

    //function to call the api and set the state
    const getCountries = async () => {
      try {
        let response = await axios.get(apiURL);
        console.log(response);
        setCountries(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getCountries();
    }, []); 

  return (
    <div>
        <h1>List of Countries</h1>
        {countries.map((country) => {
        return (
          <div key={country._id}>
            <Link>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="countries" /> 
            {/* <Link to={/projects/${country._id}}>
                      {project.name}
                    </Link> */}
            <h3>{country.name.official}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default CountriesList