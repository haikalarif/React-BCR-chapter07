import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import img_car from '../../public/images/img_car.png'
import '../../public/css/style.css'

const Jumbotron = () => {
    return (
        <section id='hero-section' className='hero_section'>
            <Container fluid="sm">
                <div className='row flex-lg-row align-items-center'>
                    <div className='col-lg-6 col-sm-12 hero_sewa'>
                        <div className='text-dark' style={{ height: "100%" }}>
                            <h2>Sewa & Rental Mobil Terbaik di kawasan Cicalengka</h2>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhan untuk sewa monil selama 24 jam.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 img_car'>
                        <img src={img_car} className='d-blcok' alt='Image Car' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Jumbotron