import React from "react"

const Catg = () => {
  const data = [
    {
      cateName: "Terrain",
    },
    {
      cateName: "Appartement",
    },
    {
      cateName: "Villa",
    },
    {
      cateName: "Studio",
    },
    {
      cateName: "Chambre",
    },
    {
      cateName: "Garage",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='h'>

          <h>Propositions </h>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
             
              <span>{value.cateName}</span>
             
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Catg
