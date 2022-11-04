import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux'
import CardCars from './CardCars'
import { Button, Container, Col, Form } from 'react-bootstrap'
import { Users, Clock } from 'react-feather'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/style.css'

function SearchCar() {
    const [driver, setDriver] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [capacity, setCapacity] = useState("");
    const [isError, setIsError] = useState("");

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getAllCars({ driver, date, time, capacity }))
        // if (driver !== "") {
        //     const pass = capacity ? capacity : "0";
        //     const filter = { driver, date, time, pass };
        //     dispatch(getAllCars(filter))
        //     console.log(state.error)
        // }
    }

    const handleDriver = (e) => {
        setDriver(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleTime = (e) => {
        setTime(e.target.value);
    }
    const handleCapacity = (e) => {
        setCapacity(e.target.value); e.preventDefault()
    }

    useEffect(() => {
        console.log(state.cars);
        setIsError(state.error)
    }, [state]);

    return (
        <>
            <div className='card cari-mobil'>
                <Form onSubmit={handleSubmit}>
                    <div className="form-cari d-flex flex-row align-items- justify-content-center p-0">
                        <div className="input-form">
                            <label className="form-label">Tipe Driver</label>
                            <select id="typeDriver" className="form-select" aria-label='Default select example' value={driver} onChange={handleDriver}>
                                <option value="" hidden>Pilih Tipe Driver</option>
                                <option value="true">Dengan Sopir</option>
                                <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="input-form">
                            <label className="form-label">Tanggal</label>
                            <div className="input-group date">
                                <input id="date" className="form-control input-tgl" type="date" onChange={handleDate} placeholder="Pilih Tanggal"
                                    style={{ cursor: "pointer" }} />
                                <span className="d-flex justify-content-end">
                                    <i data-feather="calendar" style={{ color: "#8A8A8A", width: "15px", height: "15px" }}
                                        className="input-icon icon-calendar position-absolute"></i>
                                </span>
                            </div>
                        </div>
                        <div className="input-form timer">
                            <label className="form-label">Waktu Jemput/Ambil</label>
                            {/* <input type="time" id='time' className='form-control' value={time} onChange={(e) => setTime(e.target.value)} /> */}
                            <select id="time" className="form-control" onChange={handleTime}>
                                <option value="" hidden style={{ color: "##8A8A8A !important" }}>Pilih Waktu</option>
                                <option value="08:00">08.00 WIB</option>
                                <option value="09:00">09.00 WIB</option>
                                <option value="10:00">10.00 WIB</option>
                                <option value="11:00">11.00 WIB</option>
                                <option value="12:00">12.00 WIB</option>
                            </select>
                            <span className="d-flex justify-content-end">
                                <Clock data-feather="clock" style={{ color: "#8A8A8A", width: "15px", height: "15px" }}
                                    className="input-icon icon-clock position-absolute"></Clock>
                            </span>
                        </div>
                        <div className="input-form">
                            <label className="form-label">Jumlah Penumpang (optional)</label>
                            <div className="input-group">
                                <input id="capacity" className="form-control" type="number" style={{ backgorundColor: "rgb(255, 255, 255)" }} value={capacity} onChange={handleCapacity} placeholder="Jumlah Penumpang" />
                                <span className="d-flex justify-content-end">
                                    <Users data-feather="users" style={{ color: "#8A8A8A", width: "15px", height: "15px" }}
                                        className="input-icon icon-users position-absolute"></Users>
                                </span>
                            </div>
                        </div>
                        <div className="mt-md-4">
                            <Button id="search-btn" className="btn btn-success btn-cari" type="submit">
                                Cari Mobil
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            {isError !== "" && (
                <div className="container">
                    <div className="row result-car" id="cars-container">
                        <div className='alert alert-danger text-center'>{isError}</div>
                    </div>
                </div>
            )}
            {isError === "" && (
                state.cars && <CardCars cars={state.cars} />
            )}
        </>
    )
}

export default SearchCar;
