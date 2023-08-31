import "./Home.css"
import useFetch from "../../hooks/useFetch"
import CountriesList from "../../components/countriesList/CountriesList"
import { useState, useRef } from "react"




function Home() {
   const selectTitle = useRef()
   const [url, setUrl] = useState("https://countries-api-v7sn.onrender.com/countries?limit=250")
   const { data, isPending, error } = useFetch(url)
   console.log(data)
   console.log(selectTitle)


   function searchRegion(e) {
      selectTitle.current.textContent = e.target.textContent
      if (e.target.textContent == "All") {
         setUrl("https://countries-api-v7sn.onrender.com/countries?limit=250")
      } else {
         setUrl(`https://countries-api-v7sn.onrender.com/countries?limit=250&region=${e.target.textContent}`)
      }
   }

   return (
      <div className="container">
         {isPending && <div className="loader">
            <div className="lds-roller">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>}

         <form className="search" action="#">
            <input className="search__input" type="search" name="search" placeholder="Search for a country…"
               aria-label="Search for a country…" required autoComplete="off" onChange={(e) => setUrl(`https://countries-api-v7sn.onrender.com/countries?limit=250&search=${e.target.value.toLowerCase()}`)} />
            <div className="search__select">
               <span ref={selectTitle}>Filter by Region</span>
               <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                     d="M9.45 3.45 6 6.9 2.55 3.45 1.5 4.5 6 9l4.5-4.5-1.05-1.05Z" fill="#000" />
               </svg>
               <ul className="search__select-list">
                  <li onClick={searchRegion}>All</li>
                  <li onClick={searchRegion}>Africa</li>
                  <li onClick={searchRegion}>Americas</li>
                  <li onClick={searchRegion}>Asia</li>
                  <li onClick={searchRegion}>Europe</li>
                  <li onClick={searchRegion}>Oceania</li>
               </ul>
            </div>
         </form>
         <CountriesList data={data} />
      </div>
   )
}

export default Home