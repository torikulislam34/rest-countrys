import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag, capital, population} = props.country
    return (
        <div className='country'>
            <h2>Name: {name}</h2>
            <img src={flag} alt="" />
            <h4>Capital: {capital}</h4>
            <h4>Population: {population}</h4>
       </div>
    );
};

export default Country;