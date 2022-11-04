import React from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Cars/Jumbotron'
import SearchCar from '../components/Cars/SearchCar'
import Footer from '../components/Footer'

function Car() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <SearchCar />
            <Footer />
        </div>
    )
}

export default Car;