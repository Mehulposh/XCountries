import React from 'react';
import Card from '../components/Card/card';
import { useState, useEffect } from 'react';
import getAllCountries from '../api/api';
import styles from './Countries.module.css';

function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            const data = await getAllCountries();
            setCountries(data);
        }
        fetchCountries();
    }, []);

    return (
        <div className={styles.countries_container}>
            {countries.map((country) => (
                <Card key={country.abbr} name={country.name} png={country.flag} />
            ))}
        </div>
    );
}

export default Countries;
// This code defines a React functional component called Countries. It uses the useState and useEffect hooks to manage state and side effects, respectively. The component fetches a list of countries from an API using the getAllCountries function and stores the data in the countries state variable. It then maps over the countries array to render a Card component for each country, passing the country's name and flag as props. The key prop is set to the country's abbreviation to ensure each Card has a unique identifier.