import { useEffect, useState } from 'react'
import './App.css'

import GetCountry from './getcountry'
// import Continue from './continue'
import Davlat from './davlat'
import DavlatlarKetmaKet from './ketma-ket'


function App() {


  return(
    <div>
      <Davlat/>
      <DavlatlarKetmaKet/>
    </div>
  )

}

export default App