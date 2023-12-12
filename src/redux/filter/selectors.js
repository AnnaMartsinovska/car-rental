export const selectFilter = (state) => state.filter.filter;
export const selectMake = (state) => state.filter?.make;
export const selectPrice = (state) => state.filter?.rentalPrice || 0;
export const selectMileageFrom = (state) => state.filter?.mileageFrom;
export const selectMileageTo = (state) => state.filter?.mileageTo;
export const selectAllCar = (state) => state.filter.allCar;
