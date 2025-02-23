// pages/index.js  
import { useState } from 'react';  
import Web3 from 'web3';  

export default function Home() {  
  const [walletAddress, setWalletAddress] = useState('');  

  // Connect to MetaMask wallet  
  const connectWallet = async () => {  
    if (window.ethereum) {  
      try {  
        const accounts = await window.ethereum.request({  
          method: 'eth_requestAccounts',  
        });  
        setWalletAddress(accounts[0]);  
      } catch (error) {  
        alert('Error connecting wallet!');  
      }  
    } else {  
      alert('Install MetaMask!');  
    }  
  };  

  return (  
    <div>  
      <h1>Welcome to Walletflare 🔥</h1>  
      {walletAddress ? (  
        <div>  
          <p>Wallet Address: {walletAddress}</p>  
        </div>  
      ) : (  
        <button onClick={connectWallet}>Connect Wallet</button>  
      )}  
    </div>  
  );  
}
