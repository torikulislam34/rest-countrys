
import './App.css';
import Countries from './Components/Countries/Countries';






function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}







/*
function Countries (){
  const [countries, setCountries] = useState([]);
  // console.log(countries);
  useEffect( ()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => setCountries(data));
  }, [])
  return(
    <div>
      <h2>Traveling around the world!!</h2>
      <h4>Countries abailable: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country (props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Capital: {props.capital}</h4>
    </div>
  )
}
*/
export default App;
