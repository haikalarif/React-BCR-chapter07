import React from 'react'
import {
    Container,
    Col,
    Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import img_service from '../public/images/img_service.png'
import point_list from '../public/images/point_list.png'
import '../public/css/style.css'

const OurService = () => {
    return (
        <section id="our-service" className="our_service">
            <Container className="mt-lg-5 mb-lg-5 p-0">
                <Row>
                    <Col lg={6} sm={12} className="img_service ms-lg-5">
                        <img src={img_service} alt="image service" />
                    </Col>
                    <Col lg={6} sm={12} className="list_service ms-lg-1 d-flex flex-column align-items-start p-0">
                        <div>
                            <h1>Best Car Rental for any kind of trip in Cicalengka!</h1>
                            <div className="d-lg-flex flex-lg-column align-items-start p-0">
                                <p>Sewa mobil di Cicalengka bersama Binar Car Rental jaminan
                                    harga lebih
                                    murah
                                    dibandingkan
                                    yang
                                    lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
                                    bisnis,
                                    wedding, meeting, dll.</p>
                                <ul className="list-unstyled d-flex flex-column align-items-start">
                                    <li><img className="me-3" src={point_list} alt="checklist" />Sewa
                                        Mobil
                                        Dengan Supir di Bali 12 Jam
                                    </li>
                                    <li><img className="me-3" src={point_list} alt="checklist" />Sewa
                                        Mobil Lepas
                                        Kunci di Bali 24 Jam
                                    </li>
                                    <li><img className="me-3" src={point_list} alt="checklist" />Sewa
                                        Mobil
                                        Jangka Panjang Bulanan</li>
                                    <li><img className="me-3" src={point_list} alt="checklist" />Gratis
                                        Antar -
                                        Jemput Mobil di Bandara
                                    </li>
                                    <li><img className="me-3" src={point_list} alt="checklist" />Layanan Airport
                                        Transfer / Drop In Out
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurService