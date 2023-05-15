# Web3 Crowdfunding

Web3 Crowdfunding is an innovative, decentralized crowdfunding application leveraging the power of blockchain technology. With this platform, users can easily create, manage, and contribute to crowdfunding campaigns. The project is structured in two main parts: the client-side application and the web3 Ethereum smart contract, which are deployed on ThirdWeb, a platform for building and deploying decentralized applications (dApps).

## Project Setup

To run this project locally, follow the steps below:

### Prerequisites

- Node.js installed (v12.x.x or later)
- npm (comes with Node.js)
- Metamask browser extension for interacting with the Ethereum blockchain
- A text editor like VS Code
- ThirdWeb account for deploying and managing smart contracts

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Ashok-gc/FundMeCrypto.git
   ```

2. Navigate into the cloned repository
   ```
   cd FUNDMECRYPTO
   ```

3. Install dependencies for both the client and web3 parts of the project

   Navigate to the client directory
   ```
   cd client
   ```
   Then run
   ```
   npm install
   ```

   Similarly, navigate to the web3 directory
   ```
   cd ../web3
   ```
   And run
   ```
   npm install
   ```

4. Start the client and web3 applications. In their respective directories, run
   ```
   npm run dev
   ```

### Folder Structure

The project is divided into two main parts: `/client` and `/web3`.

- `/client`: Contains the React application
  - `/src`: The source code of the application
    - `/assets`: Media files like images
    - `/components`: Reusable UI components
    - `/constants`: Constant variables used across the project
    - `/context`: React context for state management
    - `/pages`: Components representing different pages/routes
    - `/utils`: Helper functions and utilities
  - `App.jsx`: The root component of the React application
  - `main.jsx`: The entry point of the application
  - `vite.config.js`: Configuration for the Vite build tool
  - `tailwind.config.js`: Configuration for the Tailwind CSS library
  - `postcss.config.js`: Configuration for PostCSS

- `/web3`: Contains the Ethereum smart contract and related tools, deployed on ThirdWeb
  - `/artifacts`: Generated contract artifacts
  - `/cache`: Hardhat cache files
  - `/contracts`: Solidity contract files
  - `hardhat.config.js`: Configuration for the Hardhat Ethereum development environment

## Future Perspectives

As blockchain technology continues to evolve, we plan to introduce more advanced features to Web3 Crowdfunding. With the integration of ThirdWeb, our future enhancements may include support for multiple cryptocurrencies, integration with decentralized identity platforms, and sophisticated governance mechanisms for project backers.

The project is open-source, and we welcome contributions from the community to help drive these features forward.

## Requirements

To interact with this application, users will need a modern web browser and the Metamask browser extension installed. Metamask allows users to make transactions on the Ethereum blockchain. A small amount of Ether cryptocurrency will also be needed to perform transactions on the Ethereum network. Users also require a ThirdWeb account to interact with the deployed contracts.