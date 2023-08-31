import "./Country.css"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
import { Fragment } from "react"

function Country() {
   const { id } = useParams()
   const url = `https://countries-api-v7sn.onrender.com/countries/slug/${id}`
   const { data, isPending, error } = useFetch(url)
   console.log(data)



   if (isPending) {
      return (
         <div className="loader">
            <div className="lds-roller">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      )
   }
   return (
      <div className="container">

         <div className="back-button-wrapper">
            <Link className="back-button" to="/">
               <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                     d="M6.46 4.1 7.64 5.3 3.75 9.18H18.6v1.64H3.75l3.9 3.9-1.19 1.17L.57 10l5.9-5.9Z" fill="#111517" />
               </svg>
               <span>Back</span>
            </Link>
         </div>

         <div className="country-info">
            {data && <><img className="country-info__img" src={data.flags.svg} alt={data.name.common} width="560"
               height="400" />
               <div className="country-info__content">
                  <h2> {data.name.common}</h2>
                  <ul className="country-info__list">
                     <li className="country-info__item">
                        <p className="name">
                           Native Name:
                           <span> {data.name.nativeName}</span>
                        </p>
                        <p className="population">
                           Population:
                           <span> {data.population}</span>
                        </p>
                        <p className="region">
                           Region:
                           <span> {data.region}</span>
                        </p>
                        <p className="sub-region">
                           Sub Region:
                           <span> {data.subregion}</span>
                        </p>
                        <p className="capital">
                           Capital:
                           <span> {data.capital}</span>
                        </p>
                     </li>
                     <li className="country-info__item">
                        <p className="name">
                           Top Level Domain:
                           <span> {data.tld ? data.tld : "-"}</span>
                        </p>
                        <p className="population">
                           Currencies:
                           <span> {data.currencies.map((item, i) => {
                              return (
                                 <Fragment key={i}>
                                    <span >{item}</span>
                                    {data.currencies.at(-1) == item ? '.' : ' , '}
                                 </Fragment>

                              )
                           })}</span>
                        </p>
                        <p className="region">
                           Languages:
                           <span> {data.languages.map((item, i) => {
                              return (
                                 <Fragment key={i}>
                                    <span >{item}</span>
                                    {data.languages.at(-1) == item ? '.' : ' , '}
                                 </Fragment>

                              )
                           })}</span>
                        </p>
                     </li>
                  </ul>

                  <div className="country-info__borders">
                     <h3>Border Countries:</h3>
                     {data.borders ? data.borders.map((border, i) => {
                        return (
                           <Link to={`/country/${border.slug}`} key={i}>{border.common}</Link>
                        )
                     }
                     ) : "No Borders"}
                  </div>
               </div>
            </>}
         </div>
      </div>
   )
}

export default Country