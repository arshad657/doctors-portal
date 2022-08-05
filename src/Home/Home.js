import React from 'react'

import Navigation from '../Shared/Navigation/Navigation'
import Services from '../Services/Services'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner' 
import Banner from './Banner/Banner'
import ExceptionalCare from './ExceptionalCare/ExceptionalCare'
import Footer from '../Shared/Footer/Footer'

function Home() {
  return (
    <div>
    <Navigation/>
    <Banner />
    <Services />
    <ExceptionalCare />
    <AppointmentBanner />
    <Footer />
    </div>
    
  )
}

export default Home