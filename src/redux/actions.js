import { SET_LANGUAGE, SET_PLACE, SET_TIME, SET_ACTION, SET_PERSON } from './constants';

export const setLanguage = lang => ({
    type: SET_LANGUAGE,
    payload: lang,
});

export const setPerson = person => ({
    type: SET_PERSON,
    payload: person,
});

export const setPlace = place => ({
    type: SET_PLACE,
    payload: place,
});

export const setTime = time => ({
    type: SET_TIME,
    payload: time,
});

export const setAction = action => ({
    type: SET_ACTION,
    payload: action,
});