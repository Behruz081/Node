import React from 'react'

function GetCountry({ image, name, population, capital }) {
  return (
    <div>
      <img src={image} alt={name} style={{ width: "250px" }} />
      <h2 id="text" style={{ fontSize: "32px" }}>{name}</h2>
      <h2 id="text" style={{ fontSize: "32px" }}>Poytaxti: {capital}</h2>
      <h2 id="text" style={{ fontSize: "32px" }}>Aholisi: {population}</h2>
    </div>
  )
}

export default GetCountry