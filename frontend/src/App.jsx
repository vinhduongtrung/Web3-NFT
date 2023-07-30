import Header from "./components/NavHeader"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AccountRegister from "./pages/AccountRegister/AccountRegister"
import Connectawwallet from "./pages/Connectawallet/Connectawallet"
import MarketPlace from "./pages/MarketPlace"
import { Route, Routes } from "react-router-dom";
import ArtistPage from "./components/ArtistPage/ArtistPage"
import Layout from "./pages/Layout"
import NFTPage from "./pages/NFTPage/NFTPage"
import LayoutRanking from "./components/Rankings/Layout"
import "./index.css"; 

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path ="/" element ={<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path="marketplace" element = {<MarketPlace/>}/>
          <Route path="rankings" element = {<LayoutRanking/>}/>
          <Route path="artist/:username" element={<ArtistPage/>} />
          <Route path="nftdetails/:username/id/:id" element={<NFTPage/>} />
        </Route>
        <Route path="/connect" element = {<Connectawwallet/>}/>
        <Route path="/register" element = {<AccountRegister/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
