import { ADD_COUNTRIES, ADD_CITIES, REMOVE_COUNTRY } from './actionType';
import data from "../utils/data.json"

const initState = {
    countryArr: [ ...data ],
};


const reducer = ( state = initState, { type, payload }) => {
    switch(type) {
        case ADD_COUNTRIES:
            const addCountry = {
                ...payload,
                cities: [ payload.cities ],
                id: state.countryArr.length + 1
            } 
            return { 
                ...state,
                countryArr: [ ...state.countryArr, addCountry]
            };
        case REMOVE_COUNTRY:
            const country = state.countryArr.filter(item => item.country !== payload)
            return { 
                ...state,
                countryArr: [ ...country ]
            };
        default:
            return state;
    }
};

export default reducer;