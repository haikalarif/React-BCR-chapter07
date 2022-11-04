import React from 'react'
import img_people_1 from '../public/images/img_photo_1.png'
import img_people_2 from '../public/images/img_photo_2.png'
import Rate from '../public/images/Rate.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'

const options = {
    center: true,
    loop: true,
    nav: true,
    items: 3,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2.5
        }
    }
}

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="container-fluid mx-auto pt-5">
                <div className="row pt-5">
                    <div className="col text-center">
                        <h1>Testimonial</h1>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <OwlCarousel className="owl-theme" {...options}>
                        {/* <!-- item 1 --> */}
                        <div className="item">
                            <div className="container">
                                <div className="test-card text-md-start text-center p-4 ">
                                    <div className="row test-card-inside p-1 ">
                                        <div
                                            className="col-lg-3 col-md-6 col-sm-6 mt-5 test-card-photo d-flex d-md-flex justify-content-md-start justify-content-center">
                                            <span className=" p-1">
                                                <img src={img_people_1} alt="People-1" className="rounded-circle"
                                                    style={{ width: "80px", height: "80px" }} />
                                            </span>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-4 test-card-body pt-3">
                                            <span className="d-flex d-md-flex justify-content-md-start justify-content-center">
                                                <img src={Rate} alt="Rate" style={{ width: "80px", marginBottom: "1em" }} />
                                            </span>
                                            <p className="test-card-text">
                                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod”
                                            </p>
                                            <p className="test-card-name">
                                                <strong>John Dee 32, Bromo</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- item 2 --> */}
                        <div className="item">
                            <div className="container">
                                <div className="test-card text-md-start text-center p-4 ">
                                    <div className="row test-card-inside p-1 ">
                                        <div
                                            className="col-lg-3 col-md-6 col-sm-6 mt-5 test-card-photo d-flex d-md-flex justify-content-md-start justify-content-center">
                                            <span className=" p-1">
                                                <img src={img_people_2} alt="People-2" className="rounded-circle" style={{ width: "80px", height: "80px" }} />
                                            </span>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-4 test-card-body pt-3">
                                            <span
                                                className="d-flex d-md-flex justify-content-md-start justify-content-center">
                                                <img src={Rate} alt="Rate" style={{ width: "80px", marginBottom: "1em" }} />
                                            </span>
                                            <p className="test-card-text">
                                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod”
                                            </p>
                                            <p className="test-card-name">
                                                <strong>John Dee 32, Bromo</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- item 3 --> */}
                        <div className="item">
                            <div className="container">
                                <div className="test-card text-md-start text-center p-4 ">
                                    <div className="row test-card-inside p-1 ">
                                        <div
                                            className="col-lg-3 col-md-6 col-sm-6 mt-5 test-card-photo d-flex d-md-flex justify-content-md-start justify-content-center">
                                            <span className=" p-1">
                                                <img src={img_people_1} alt="People-3" className="rounded-circle" style={{ width: "80px", height: "80px" }} />
                                            </span>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-4 test-card-body pt-3">
                                            <span
                                                className="d-flex d-md-flex justify-content-md-start justify-content-center">
                                                <img src={Rate} alt="Rate" style={{ width: "80px", marginBottom: "1em" }} />
                                            </span>
                                            <p className="test-card-text">
                                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod”
                                            </p>
                                            <p className="test-card-name">
                                                <strong>John Dee 32, Bromo</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Testimonial