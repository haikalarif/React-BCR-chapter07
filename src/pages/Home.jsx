import React, { Fragment } from 'react'
import '../public/css/style.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OurService from '../components/OurService'
import WhyUs from '../components/WhyUs'
import Testimonial from '../components/Testimonial'
import Banner from '../components/Banner'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function Home() {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <OurService />
            <WhyUs />
            <Testimonial />
            <Banner />
            <FAQ />
            <Footer />
        </Fragment>
    )
}

export default Home