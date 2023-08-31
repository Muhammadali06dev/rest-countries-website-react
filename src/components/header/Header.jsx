import "./Header.css"

import { Link } from "react-router-dom"

function Header() {
   const darkMode = localStorage.getItem("mode") ? localStorage.getItem("mode") : null
   if (darkMode) {
      document.body.classList.add("dark-mode")
   }

   function changeMode() {
      document.body.classList.toggle('dark-mode')
      localStorage.getItem("mode") ? localStorage.setItem("mode", "") : localStorage.setItem("mode", "dark")
   }
   return (
      <header className="header">
         <div className="container">
            <Link className="header__logo" to="/">Where in the world?</Link>
            <button className="header__dark-mode" onClick={changeMode}>
               <div>
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd"
                        d="M13.55 13.81c-3.88 0-7.03-2.88-7.03-6.44 0-1.34.45-2.59 1.21-3.62C4.7 4.7 2.5 7.33 2.5 10.44c0 3.9 3.45 7.06 7.7 7.06 3.4 0 6.27-2 7.3-4.8a7.46 7.46 0 0 1-3.95 1.12Z"
                        fill="#fff" stroke="#111517" strokeWidth="1.25" />
                  </svg>
                  <span>Dark Mode</span>
               </div>
            </button>
         </div>
      </header>
   )
}

export default Header