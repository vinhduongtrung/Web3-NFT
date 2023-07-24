// import { useState } from "react";
    
//     const connectWalletHandler = () => {
// 		let contractAddress = '0xCF31E7c9E7854D7Ecd3F3151a9979BC2a82B4fe3';

// 	const [errorMessage, setErrorMessage] = useState(null);
// 	const [defaultAccount, setDefaultAccount] = useState(null);
// 	const [connButtonText, setConnButtonText] = useState('Connect Wallet');


// 		if (window.ethereum && window.ethereum.isMetaMask) {

// 			window.ethereum.request({ method: 'eth_requestAccounts'})
// 			.then(result => {
// 				accountChangedHandler(result[0]);
// 				setConnButtonText('Wallet Connected');
// 			})
// 			.catch(error => {
// 				setErrorMessage(error.message);
			
// 			});

// 		} else {
// 			console.log('Need to install MetaMask');
// 			setErrorMessage('Please install MetaMask browser extension to interact');
// 		}
// 	}
//     const accountChangedHandler = (newAccount) => {
// 		setDefaultAccount(newAccount);
// 		updateEthers();
// 	}
//     const updateEthers = () => {
// 		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
// 		setProvider(tempProvider);

// 		let tempSigner = tempProvider.getSigner();
// 		setSigner(tempSigner);

// 		let tempContract = new ethers.Contract(contractAddress, SimpleStorage_abi, tempSigner);
// 		setContract(tempContract);	
// 	}

// export default Storage;