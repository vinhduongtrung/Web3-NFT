import {create} from 'zustand';

const useWallet = create((set) => ({
    hash : "",
    connectMetaMark : () =>{
        if (window.ethereum && window.ethereum.isMetaMask) {

            window.ethereum.request({ method: 'eth_requestAccounts'})
            .then(result => {
                const hash = result[0]
                set({hash})
            })
            .catch(error => {
                console.log(error);
            
            });
    
        } else {
            console.log('Need to install MetaMask');
        }}
    }))

export default useWallet