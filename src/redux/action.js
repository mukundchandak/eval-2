import { ADD_COUNTRIES, ADD_CITIES, REMOVE_COUNTRY } from './actionType';


export const addCountries = payload => ({
    type: ADD_COUNTRIES,
    payload
});

export const addCities = payload => ({
    type: ADD_CITIES,
    payload
});

export const removeCountry = payload => ({
    type: REMOVE_COUNTRY,
    payload
});