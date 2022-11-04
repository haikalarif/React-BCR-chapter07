const initialState = {
    loading: false,
    cars: [],
    error: "",
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARS":
            return {
                ...state,
                loading: false,
                cars: action.payload,
            };
        case "FILTER_CARS":
            return {
                ...state,
                loading: true,
            };
        case "ERROR_CARS":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default carsReducer;