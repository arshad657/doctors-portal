import React from 'react'

import Navigation from '../Shared/Navigation/Navigation'
import Services from '../Services/Services'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner' 
import Banner from './Banner/Banner'
import ExceptionalCare from './ExceptionalCare/ExceptionalCare'

function Home() {
  return (
    <div>
    {/* <Navigation /> */}
    <Banner />
    <Services />
    <ExceptionalCare />
    <AppointmentBanner />
    </div>
    
  )
}

export default Home