import React from "react"
import "./App.css"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Profil from "./common/profil/Profil"



function App() {
  const { shopItems } = Sdata
  return (
    <>
      <Router>
        <Header/>
        <Switch>       
          <Route path='/' exact>
            <Pages shopItems={shopItems} />
          </Route>
          <Route path='/profil' exact>
            <Profil/>
          </Route>
         </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
