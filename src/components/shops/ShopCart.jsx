import React from "react"
import { Link } from "react-router-dom"


const ShopCart = ({ shopItems}) => {
  console.log(shopItems.filter(shopItems=>shopItems.name.includes("villa")));
  
  return (
    <>
      {shopItems.map((shopItems) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img' >
                <img  src={shopItems.cover} alt='' />
              </div>
              <div className='product-details'>
                <h4>{shopItems.name}</h4>
                <h3>128 m°</h3>
                <div className='price'>
                  <h4>{shopItems.price}.00 DA </h4>
                
                  <button>
                    <Link to='/profil'>
                    <i className='fa fa-plus'></i>     {/*dagui anajouti le pop up im*/}
                    </Link>
                  </button>

                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
