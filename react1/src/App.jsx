import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import User from './user'
import Propsuser from './propsuser'
import kimdir1 from './assets/propsimg/images.jpg'
import kimdir2 from './assets/propsimg/images2.jpg'
import kimdir3 from './assets/propsimg/images3.jpg'
import kimdir4 from './assets/propsimg/images4.jpg'
import kimdir5 from './assets/propsimg/images5.jpg'
import kimdir6 from './assets/propsimg/images6.jpg'

import Credit from './credit'


function App() {
  return (
    <div style={{display:"flex", justifyContent:"space-between", height:"100vh", alignItems:"center"
    }}>
      {/* <Propsuser
      rasm={kimdir1}
      ism='Gulzoda'
      kasb='Matematik'
      manzil='Yangibozor'
      />
    
      <Propsuser
      rasm={kimdir2}
      ism='Mohidil'
      kasb='Dasturchi'
      manzil='Moskva MFY'
      />
      
      <Propsuser 
      rasm={kimdir3}
      ism='Ruhshona'
      kasb='Mentor'
      manzil='Dostlik MFY'
      />

      <Propsuser 
      rasm={kimdir4}
      ism='Behruz'
      kasb='Doktor'
      manzil='Navroz MFY'
      />

      <Propsuser 
      rasm={kimdir5}
      ism='Muxlisa'
      kasb='Jurnalist'
      manzil=' MFY'
      />
      
      <Propsuser 
      rasm={kimdir6}
      ism='Zarnigor'
      kasb='Aviatsiya'
      manzil='Direktorni kochadoshi'
      /> */}

    <Credit 
    ega='Normatov Behruz'
    nomer='7777 7777 7777 7777'
    muddat='12/2031'
    company='Agrobank'
    />
    <Credit 
    ega='Zaripova Zarnigor'
    nomer='7777 7777 7777 7776'
    muddat='12/2031'
    company='Agrobank'
    />
    <Credit 
    ega='Rajabova Kumoshoy'
    nomer='7777 7777 7777 7775'
    muddat='12/2031'
    company='Agrobank'
    />

    </div>
  )
}

export default App
