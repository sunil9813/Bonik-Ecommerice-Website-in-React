import React from "react"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({shopItems }) => {
  return (
    <>
      <Shop shopItems={shopItems}  />    
      <Wrapper />
    </>
  )
}

export default Pages
