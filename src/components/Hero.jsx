import React from 'react'
import {
    Container,
    Col,
    Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import img_car from '../public/images/img_car.png'
import { Link } from 'react-router-dom'
import '../public/css/style.css'

const Hero = () => {
    return (
        <section id='hero-section' className='hero_section'>
            <Container fluid="sm">
                <Row className='flex-lg-row align-items-center'>
                    <Col lg={6} sm={12} className='hero_sewa'>
                        <div className='text-dark' style={{ height: "100%" }}>
                            <h2>Sewa & Rental Mobil Terbaik di kawasan Cicalengka</h2>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhan untuk sewa monil selama 24 jam.</p>
                            <Link className='btn btn-success button_sewa' to='/cars' role='button'>Mulai Sewa Mobil</Link>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className='img_car'>
                        <img src={img_car} className='d-blcok' alt='Image Car' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero