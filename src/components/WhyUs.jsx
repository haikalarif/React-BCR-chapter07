import React from 'react'
import {
    Card,
    Container,
    Col,
    Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ic_complete from '../public/images/icon_complete.png'
import ic_price from '../public/images/icon_price.png'
import ic_clock from '../public/images/icon_24hrs.png'
import ic_professional from '../public/images/icon_professional.png'
import '../public/css/style.css'

const WhyUs = () => {
    return (
        <section id="why-us" className="why_us">
            <Container className="p-0">
                <h1>Why Us?</h1>
                <p className="p_why">Mengapa harus pilih Binar Car Rental?</p>
                <Row>
                    <Col lg={3} sm={12} className="p-0">
                        <Card className="d-lg-flex flex-lg-column align-items-start">
                            <img src={ic_complete} width="30" alt="icon complete" />
                            <h5>Mobil Lengkap</h5>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                            </p>
                        </Card>
                    </Col>
                    <Col lg={3} sm={12} className="p-0">
                        <Card className="d-lg-flex flex-lg-column align-items-start">
                            <img src={ic_price} width="30" alt="icon price" />
                            <h5>Harga Murah</h5>
                            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                mobil lain
                            </p>
                        </Card>
                    </Col>
                    <Col lg={3} sm={12} className="p-0">
                        <Card className="d-lg-flex flex-lg-column align-items-start">
                            <img src={ic_clock} width="30" alt="icon 24 hours" />
                            <h5>Layanan 24 Jam</h5>
                            <p>Siap melayani kebuthan Anda selama 24 jam nonstop. Kami juga tersedia
                                di akhir
                                minggu</p>
                        </Card>
                    </Col>
                    <Col lg={3} sm={12} className="p-0">
                        <Card className="d-lg-flex flex-lg-column align-items-start">
                            <img src={ic_professional} width="30" alt="icon professional" />
                            <h5>Sopir Profesional</h5>
                            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                tepat
                                waktu</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyUs