"use client"; // Add this at the top for Next.js
import { useState } from 'react';
import { ReownAppKit } from '@reown/appkit';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');

  // Initialize Reown AppKit for wallets like MetaMask, Coinbase, etc.
  const appKit = new ReownAppKit({
    projectId: 'YOUR_PROJECT_ID', // Get this from https://cloud.reown.com/
    chains: ['eth'], // Support Ethereum
  });

  // Connect Wallet Function
  const connectWallet = async () => {
    try {
      const provider = await appKit.connect();
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      alert('Connected! Address: ' + accounts[0]);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>My Wallet Site</h1>
      <button 
        onClick={connectWallet}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        {walletAddress ? 'Connected: ' + walletAddress : 'Connect Wallet'}
      </button>
    </div>
  );
}