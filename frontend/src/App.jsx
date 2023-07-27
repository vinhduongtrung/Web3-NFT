import Header from "./components/NavHeader"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AccountRegister from "./pages/AccountRegister/AccountRegister"
import Connectawwallet from "./pages/Connectawallet/Connectawallet"
import NFTDetails from "./pages/NFTDetailsPage/NFTDetails"
import Artist from "./pages/Artist"
import NFT from "./pages/NFT"
import MarketPlace from "./pages/MarketPlace"
import Rankings from "./pages/Rankings"
import "./index.css";
import { Route, Routes } from "react-router-dom";
import ArtistPage from "./components/ArtistPage/ArtistPage"
import Layout from "./pages/Layout"
<<<<<<< HEAD
import NFTPage from "./pages/NFTPage/NFTPage"
=======
import useUser from "./store/user"
>>>>>>> 51fda7f098de60fd21ab5573cfdc986437096d68
function App() {
  const {user} = useUser();
    
  return (
    <>
<<<<<<< HEAD
      <Header/>
=======
      <Header user={user}/>

>>>>>>> 51fda7f098de60fd21ab5573cfdc986437096d68
      <Routes>
        <Route path ="/" element ={<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path="nft/:id" element = {<NFT/>}/>
          <Route path="marketplace" element = {<MarketPlace/>}/>
          <Route path="rankings" element = {<Rankings/>}/>
<<<<<<< HEAD
          <Route path="artist-page" element={<ArtistPage/>} />
          <Route path="nft-details" element={<NFTPage/>} />
=======
          <Route path="artist/:username" element={<ArtistPage/>} />
>>>>>>> 51fda7f098de60fd21ab5573cfdc986437096d68
        </Route>
        <Route path="/connect" element = {<Connectawwallet/>}/>
        <Route path="/register" element = {<AccountRegister/>}/>
        <Route path="/NFTDetails" element = {<NFTDetails/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
