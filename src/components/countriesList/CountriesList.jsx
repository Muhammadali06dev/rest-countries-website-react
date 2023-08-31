import "./CountriesList.css"
import React from 'react'
import { Link } from "react-router-dom"

function CountriesList({ data }) {
   return (
      <ul className="cards">
         {data && data.data.map((item) => {
            return (
               <li className="cards__item" key={item._id}>
                  <Link to={`country/${item.name.slug}`}>
                     <img src={item.flags.svg} alt={`${item.name.common}-flag`} width="267" height="160" />
                     <div className="cards__item-inner">
                        <h3 className="cards__title">{item.name.common}</h3>
                        <p className="population">Population: <span>{item.population}</span></p>
                        <p className="region">Region: <span>{item.region}</span></p>
                        <p className="capital">Capital: <span>{item.capital}</span></p>
                     </div>
                  </Link>
               </li>
            )
         })}
      </ul>
   )
}

export default CountriesList