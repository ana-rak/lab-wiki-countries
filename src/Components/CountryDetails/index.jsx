import axios from 'axios';
import {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'


export default function CountryDetails(props) {
    const [country, setCountry] = useState(null);
    const {countryCode} = useParams();

    const getCountry = async () => {
        try {
            let response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            setCountry(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
    getCountry();
  }, []);

  return (
    <div>
        {country && (
          <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='country'/>
            <h2>{country.name.official}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Continent: {country.region}</p>
            <p>Language: {Object.values(country.languages)[0]}</p>
            <Link to='/'>Back</Link>
          </div>
        )}
    </div>
  )
}
