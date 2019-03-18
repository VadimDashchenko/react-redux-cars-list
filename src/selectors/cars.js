import { createSelector } from 'reselect';

export const getCarsList = createSelector(
    state => state.cars.get('carList'),
    carList => carList.toJS(),
);

export const getCurrentViewableCarID = createSelector(
    state => state.cars.get('setCarByID'),
    carId => carId,
);

export const currentViewableCar = createSelector(
    state => state.cars.get('currentViewableCar'),
    currentCar => currentCar
);

export const currentCar = createSelector(
    currentViewableCar,
    state => state.cars.get('carList'),
    (currentCar, carList) => {
        const car = carList.findLast(car => car.get('id') === currentCar);
        return car && car.toJS()
    }
);

export const showDetail = createSelector(
  state => state.cars.get('redirect'),
    redirect => redirect
);