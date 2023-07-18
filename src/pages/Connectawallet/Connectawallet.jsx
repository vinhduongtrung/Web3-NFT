import { useEffect } from 'react'
import '../Connectawallet/Connectawallet.css'
import Coin from "../../assets/Wallet/Coinbase.svg"
import Metamask from "../../assets/Wallet/Metamask.svg"
import WalletConnect from "../../assets/Wallet/WalletConnect.svg"

    
const Connectawallet = () => {
  return (
    <div>
        <div className='Contain'>
            <div className='Img'>
                <img src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-99@1x.png"} alt="" />
            </div>
            <div className='content'>
                <div className='title'>
                <h1>Connect Wallet</h1>
                <p>Choose a wallet you want to connect. There are several wallet providers.</p>
                </div>
            <div className='Button'>
                <button> <img src={Metamask} alt="" />
                <p>Metamask</p>
                </button>
                <button> <img src={WalletConnect} alt="" />WalletConnect</button>
                <button> <img src={Coin} alt="" />Coinbase</button>
            </div>
            </div>
        </div>
</div>
  )
}

export default Connectawallet;