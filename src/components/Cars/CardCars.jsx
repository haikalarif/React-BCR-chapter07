import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/style.css'
import ic_users from '../../public/images/fi_users.png'
import ic_calendar from '../../public/images/fi_calendar.png'
import ic_settings from '../../public/images/fi_settings.png'

const CardCars = ({ cars }) => {
    return (
        <div className="container">
            <div className="row result-car" id="cars-container">
                {cars.map((car) => (
                    <div className="col-md-4 my-2" key={car.id}>
                        <div className="card card-car mx-auto my-2 g-0">
                            <div className="card_img mx-auto">
                                <img src={car.image} className="" alt={car.manufacture} />
                            </div>
                            <div className="card-body" style={{ fontSize: "14px" }}>
                                <p className="card-text model-car">{car.manufacture} / {car.type}</p>
                                <p className="card-title">Rp. {car.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari</p>
                                <p className="card-text description">{car.description}</p>
                                <div className="my-2 description"><img src={ic_users} className="me-2" />{car.capacity} orang</div>
                                <div className="my-2 description"><img src={ic_settings} className="me-2" />{car.transmission}</div>
                                <div className="my-2 description"><img src={ic_calendar} className="me-2" />Tahun {car.year}</div>
                                <button className="btn btn-success btn-pilih text-white w-100 mt-2">Pilih Mobil</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardCars;