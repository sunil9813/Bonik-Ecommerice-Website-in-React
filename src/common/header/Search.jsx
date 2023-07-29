import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Search = () => {
  
  const [query, setQuery] = useState("");
  console.log(query)
  return (
    <>
      <section className='search'>
        <div className='container f_flex'>

          <div className='search-box d_flex'>
            <i className='fa fa-search'></i>
            <input 
            type='text' 
            placeholder='Search and hit enter...' 
            onChange = {(e) => setQuery(e.target.value)}/>
            <span>Recherche</span>
          </div>

          <div className='icon f_flex width'>
           
            <div>
              <Link to='/'>
               <i className='fa fa-house icon-circle'></i>
              </Link>
            </div>

            <div>
              <Link to='/profil'>
              <i className='fa fa-user icon-circle'></i>
              </Link>
             
             
            </div>
          
           
            
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
