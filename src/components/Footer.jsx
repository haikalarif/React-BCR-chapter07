import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ic_fb from '../public/images/icon_facebook.png'
import ic_ig from '../public/images/icon_instagram.png'
import ic_twitch from '../public/images/icon_twitch.png'
import ic_twitter from '../public/images/icon_twitter.png'
import ic_mail from '../public/images/icon_mail.png'
import Logo from '../public/images/logo.png'
import '../public/css/style.css'

const Footer = () => {
    return (
        <footer>
            <div className="container-sm mx-auto position-relative p-0 footer">
                <div className="row gap-3 gap-md-0 list-footer">
                    <div className="col-lg-3 col-md-6 p-0">
                        <div className="address">
                            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p>binarcarrental@gmail.com</p>
                            <p>081-233-334-808</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 navigation-footer">
                        <div className="list-unstyled footer-nav d-flex flex-column align-items-start">
                            <li className="nav-item">
                                <a href="#our-service" className="nav-link">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#why-us" className="nav-link">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonial" className="nav-link">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a href="#faq" className="nav-link">FAQ</a>
                            </li>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-0 sosmed">
                        <p>Connect with us</p>
                        <nav className="list-unstyled d-flex flex-row align-items-start gap-3">
                            <li className="nav-item me-16">
                                <a href="#" className="nav-link text-decoration-none"><img src={ic_fb}
                                    className="icon_sosmed" alt="facebook" /></a>
                            </li>
                            <li className="nav-item me-16">
                                <a href="#" className="nav-link text-decoration-none"><img src={ic_ig}
                                    className="icon_sosmed" alt="instagram" /></a>
                            </li>
                            <li className="nav-item me-16">
                                <a href="#" className="nav-link text-decoration-none"><img src={ic_twitter}
                                    className="icon_sosmed" alt="twitter" /></a>
                            </li>
                            <li className="nav-item me-16">
                                <a href="#" className="nav-link text-decoration-none"><img src={ic_mail}
                                    className="icon_sosmed" alt="mail" /></a>
                            </li>
                            <li className="nav-item me-16">
                                <a href="#" className="nav-link text-decoration-none"><img src={ic_twitch}
                                    className="icon_sosmed" alt="twitch" /></a>
                            </li>
                        </nav>
                    </div>
                    <div className="copyright col-lg-3 col-md-6">
                        <p>Copyright Binar 2022</p>
                        <img src={Logo} alt="Logo Footer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer