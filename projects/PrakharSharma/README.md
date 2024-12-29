# Onchain Portfolio

## Overview
The **Onchain Portfolio** is a decentralized application (dApp) that allows users to securely store their personal or professional data directly on the Ethereum blockchain. Built using Solidity smart contracts, this application ensures immutability, transparency, and security for the data stored.

## Features
- **Data Immutability**: Once data is stored on the blockchain, it cannot be altered or deleted.
- **Security**: Leverages the robust security mechanisms of Ethereum, ensuring data integrity and resistance to tampering.
- **Transparency**: Stored data is publicly verifiable, making it suitable for showcasing portfolios or credentials.
- **User Ownership**: Data is owned and controlled by the user, with no central authority.

## How It Works
1. **Deploy Smart Contract**: The application uses a Solidity smart contract deployed on the Ethereum blockchain.
2. **Store Data**: Users can store their portfolio data, such as project details, credentials, or achievements, through transactions.
3. **Access Data**: Stored data is accessible to anyone with the contract address, ensuring transparency while maintaining trustless interaction.

## Prerequisites
- **Ethereum Wallet**: An Ethereum-compatible wallet (e.g., MetaMask).
- **ETH Balance**: Sufficient ETH for gas fees to interact with the smart contract.
- **Node.js**: For running the dApp’s frontend (optional).
- **Truffle/Hardhat**: For smart contract development and deployment (optional).

## Installation
### Backend (Smart Contracts)
1. Clone the repository:
   ```bash
   git clone https://github.com/AtoMicKraK1n/onchain_portfolio_here.git
   cd onchain_portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Frontend (Optional)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage
1. Connect your wallet to the application.
2. Interact with the smart contract to store your portfolio data.
3. View your stored data using the dApp interface or directly on the blockchain explorer.

## Smart Contract Overview

### Key Functions
- `addPortfolioEntry(string memory data)`: Adds a new entry to the user’s portfolio.
- `getPortfolioEntries(address user)`: Retrieves all portfolio entries for a specific user.
- `updateEntry(uint256 entryId, string memory newData)`: (Optional) Updates an entry if allowed by contract logic.

### Contract Security
- Ensures only the owner of the data can add or modify their entries.
- Implements checks to prevent unauthorized access.


# My On-Chain Portfolio
This is my on-chain portfolio built during ETH Builder's Day!  
- **Tech Stack**: Solidity, React, Sepolia Testnet  
- **Features**: Showcase projects, connect wallet, live demos  
- **Deployed on**: Sepolia Testnet (Contract Address: 0x123...)
