import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <h1>Site</h1>
            <p>bla bla bla bla</p>
          </div>
          
          <div className='box'>
            <h2>Services</h2>
            <ul>
              <li>Aide</li>
              <li>A propos </li>
              <li>Profil </li>
              <li>Accueil</li>
             
            </ul>
          </div>

          <div className='box'>
            <h2>Contact</h2>
            <ul>
              <li>46, Rue Krim Belkacem, Bab Ezzouar, Alger</li>
              <li>Email: support@gmail.com</li>
              <li>Phone:  +213 557 36 88 07</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
