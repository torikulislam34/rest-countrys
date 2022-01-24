import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Contries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    console.log(countries)
    useEffect(()=>{
        fetch(`https://restcountries.com/v2/all`)
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div>
            <h1>Hello form Countries: {countries.length}</h1>
            <div className='country-container'>
            {
                countries.map( country => <Country country={country} 
                ></Country>)
            }
            </div>
        </div>
    );
};

// function Country (props){
//     return(
       
//     )
// }

export default Countries;