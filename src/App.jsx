import Header from "./components/NavHeader"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AccountRegister from "./pages/AccountRegister/AccountRegister"
import Connectawwallet from "./pages/Connectawallet/Connectawallet"
import Artist from "./pages/Artist"
import NFT from "./pages/NFT"
import MarketPlace from "./pages/MarketPlace"
import Rankings from "./pages/Rankings"
import "./index.css";
import { Route, Routes } from "react-router-dom";
import ArtistPage from "./components/ArtistPage/ArtistPage"
function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Connect" element = {<Connectawwallet/>}/>
          <Route path="/register" element = {<AccountRegister/>}/>
          <Route path="/artist/:id" element = {<Artist/>}/>
          <Route path="/nft/:id" element = {<NFT/>}/>
          <Route path="/marketplace" element = {<MarketPlace/>}/>
          <Route path="/rankings" element = {<Rankings/>}/>
          <Route path="/artist-page" element={<ArtistPage/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
