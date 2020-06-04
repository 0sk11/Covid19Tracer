import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';
const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedcountries, setFetchedCoutries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCoutries(await fetchCountries());
        }
        fetchApi();
    }, [setFetchedCoutries]);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedcountries.map(
                    (country, i) => (<option key={i} value={country}>{country}</option>)
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;