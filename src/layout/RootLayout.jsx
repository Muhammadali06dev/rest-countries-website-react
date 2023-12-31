import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

function RootLayout() {
   return (
      <>
         <Header />
         <main>
            <Outlet></Outlet>
         </main>
         <footer></footer>
      </>
   )
}

export default RootLayout