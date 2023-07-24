
import Button from '../../components/Button';
import '../Connectawallet/Connectawallet.css'
import {ethers} from 'ethers'

const Connectawallet = () => {

    const connectMetaMark = () =>{
        if (window.ethereum && window.ethereum.isMetaMask) {

            window.ethereum.request({ method: 'eth_requestAccounts'})
            .then(result => {
                console.log(result[0]);
            })
            .catch(error => {
                console.log(error);
            
            });
    
        } else {
            console.log('Need to install MetaMask');
        }
    }
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
                <button onClick={connectMetaMark}> <img src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/metamask@2x.svg"} alt="" />
                Metamask
                </button>
                {/* <button> <img src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/walletconnect@2x.svg"} alt="" />WalletConnect</button>
                <button> <img src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/coinbase@2x.svg"} alt="" />Coinbase</button> */}
            </div>
            </div>
        </div>
</div>
  )
}

export default Connectawallet;