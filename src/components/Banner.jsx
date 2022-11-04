import React from 'react'
import { Container, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../public/css/style.css'

const Banner = () => {
    return (
        <Container className="banner p-0">
            <Card className="card_banner d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center">
                <div className="get_started d-sm-flex flex-sm-column p-0">
                    <h1 className="text-center">Sewa Mobil di Cicalengka Sekarang</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                        tempor
                        incididunt ut labore
                        et
                        dolore magna aliqua. </p>
                    <div className="card-body d-flex align-items-center justify-content-center mt-lg-4">
                        <Link to='/cars' className="btn btn-success button_sewa">Mulai Sewa Mobil</Link>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default Banner