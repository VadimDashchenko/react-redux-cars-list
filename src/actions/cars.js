export const CARS_FETCH_CAR = 'CARS_FETCH_CAR';

export const CARS_GET_CURRENT_VIEWABLE_CAR = 'CARS_GET_CURRENT_VIEWABLE_CAR';

export const CARS_REDIRECT_TO_DETAIL = 'CARS_REDIRECT_TO_DETAIL';

export const CARS_REDIRECT_TO_LIST = 'CARS_REDIRECT_TO_LIST';

export const fetchCars = payload => ({
    type: CARS_FETCH_CAR,
    payload
});

export const getCurrentViewableCarById = payload => ({
   type: CARS_GET_CURRENT_VIEWABLE_CAR,
   payload
});

export const redirectToDetail = payload => ({
    type:CARS_REDIRECT_TO_DETAIL,
    payload
});

export const redirectToList = payload => ({
    type: CARS_REDIRECT_TO_LIST,
    payload
});