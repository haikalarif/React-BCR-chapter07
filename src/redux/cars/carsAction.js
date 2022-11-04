const getCars = (cars) => {
    return {
        type: "GET_CARS",
        payload: cars,
    };
};
const filterCars = () => {
    return {
        type: "FILTER_CARS",
    };
};
const errorCars = (error) => {
    return {
        type: "ERROR_CARS",
        payload: error,
    };
};

const getAllCars = ({ driver, date, time, capacity }) => {
    return (dispatch) => {
        dispatch(filterCars);
        fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
            .then((res) => {
                if (res.status !== 200) {
                    throw Error("Fetch Data Failed");
                }
                return res.json();
            })
            .then((data) => {
                console.log(date.length)
                if (date.length !== 0 || time.length !== 0) {
                    let inputTime = date + "T" + time + "Z"
                    const filterType = data.filter((car) => {
                        return (
                            car.available.toString() === driver.toString()
                        )
                    })
                    dispatch(getCars(filterType));
                    const filterData = filterType.filter((car) => {
                        // if(capacity.length !== 0) {
                        //     return (
                        //         car.capacity >= capacity && Date.parse(car.availableAt) <= Date.parse(inputTime)
                        //     )
                        // } else {
                        //     return (
                        //         Date.parse(car.availableAt) <= Date.parse(inputTime)
                        //     )
                        // }
                        return !capacity > 0 
                        ? Date.parse(car.availableAt) <= Date.parse(inputTime)
                        : Date.parse(car.availableAt) <= Date.parse(inputTime) && car.capacity <= capacity && car.capacity >= capacity;
                    })
                    dispatch(getCars(filterData));
                } else {
                    dispatch(errorCars("Please fill our the Form!!!"))
                }
            })
            .catch((err) => {
                const errorMsg = err.message;
                errorCars(errorMsg);
            });
    };
};

export default getAllCars;