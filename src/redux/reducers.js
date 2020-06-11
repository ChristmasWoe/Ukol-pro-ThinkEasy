import { SET_LANGUAGE, SET_PLACE, SET_TIME, SET_ACTION, SET_PERSON, TOGGLE_MODE, SET_DEFAULT } from './constants';

const serviceInitialState = {
    lang: 'en',
    mode: 'form',
    styleMode: 'default',
}

const dataInitialState = {
    person: '',
    action: '',
    time: '',
    place: '',
}

export const setServiceState = (state = serviceInitialState, action = {}) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                lang: action.payload,
            }
        case TOGGLE_MODE:
            if (state.mode == 'form') {
                return {
                    ...state,
                    mode: 'popup'
                }
            } else {
                return {
                    ...state,
                    mode: 'form'
                }
            }

        default:
            return state;
    }
}

export const setDataState = (state = dataInitialState, action = {}) => {
    switch (action.type) {
        case SET_PERSON:
            return {
                ...state,
                person: action.payload,
            }
        case SET_ACTION:
            return {
                ...state,
                action: action.payload,
            }
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
            }
        case SET_PLACE:
            return {
                ...state,
                place: action.payload,
            }
        case SET_DEFAULT:
            return dataInitialState;
        default:
            return state;
    }
};