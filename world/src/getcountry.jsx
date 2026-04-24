import React from 'react'

function GetCountry({ image, name }) {
  return (
    <div>
      <img src={image} alt={name} style={{ width: "250px", border: "2px solid #fff" }} />
      <h2 id="text" style={{ fontSize: "32px" }}>{name}</h2>
    </div>
  )
}

export default GetCountry