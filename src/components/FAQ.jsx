import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import '../public/css/style.css'

const FAQ = () => {
    return (
        <section id="faq" className="faq">
            <Container className="mt-lg-5 p-0">
                <div className="row">
                    <div className="faq_title col-lg-5 col-sm-12">
                        <h2 className="faq_heading">Frequently Asked Question</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="accordion_list col-lg-7 col-sm-12">
                        <Accordion>
                            <Accordion.Item className="mb-3" eventKey='0'>
                                <Accordion.Header>
                                    Apa saja syarat yang dibutuhkan?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vitae
                                    praesentium libero. Veritatis vero, praesentium magni odit quae beatae
                                    blanditiis? Distinctio, at unde ipsam officiis praesentium repellat
                                    doloribus
                                    laboriosam architecto.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey='1'>
                                <Accordion.Header>
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, veniam.
                                    Error
                                    nulla, non harum blanditiis ab nesciunt quisquam. Velit, facilis
                                    eligendi
                                    laboriosam non quam nihil maiores laudantium officia veniam neque!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey='2'>
                                <Accordion.Header>
                                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui
                                    cum
                                    repudiandae quis suscipit, aperiam delectus porro modi pariatur eaque
                                    ducimus,
                                    sit, laudantium amet obcaecati? Dolorem voluptates asperiores corrupti
                                    dolorum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey='3'>
                                <Accordion.Header>
                                    Apakah Ada biaya antar-jemput?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nihil ex
                                    voluptatem corporis impedit vero reprehenderit totam, necessitatibus,
                                    excepturi
                                    deleniti omnis neque ullam, cumque placeat magni! Velit perferendis
                                    provident
                                    atque?
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey='4'>
                                <Accordion.Header>
                                    Bagaimana jika terjadi kecelakaan?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, soluta
                                    modi
                                    dolorum veritatis aut sint assumenda amet recusandae est nihil, deserunt
                                    sit
                                    dolorem optio magni aliquam? Culpa veniam quos placeat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FAQ