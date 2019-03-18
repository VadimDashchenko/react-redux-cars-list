import {
    CARS_FETCH_CAR,
    CARS_GET_CURRENT_VIEWABLE_CAR,
    CARS_REDIRECT_TO_DETAIL,
    CARS_REDIRECT_TO_LIST
} from '../actions/cars';
import { fromJS } from 'immutable';

const initialState = fromJS({
    carList: [],
    currentViewableCar: [],
    redirect: false
});

export default ( state = initialState, action) => {
    switch (action.type){
        case CARS_FETCH_CAR: {
            return state.set('carList', fromJS(action.payload))
        }
        case CARS_GET_CURRENT_VIEWABLE_CAR: {
            return state.set('currentViewableCar', action.payload)
        }
        case CARS_REDIRECT_TO_DETAIL: {
            return state.set('redirect', true)
        }
        case CARS_REDIRECT_TO_LIST: {
            return state.set('redirect', false)
        }
        default: {
            return state
        }
    }
}