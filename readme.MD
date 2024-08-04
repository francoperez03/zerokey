# ZeroKey

**ZeroKey** revolutionizes payment security by converting sensitive credit card data into unbreachable Zero-Knowledge proofs. This innovative approach ensures that e-commerce platforms no longer need to store sensitive information, fully reducing the risk of data breaches and later usage of credit card information for fraudulent transactions. Moreover, ZeroKey combats phishing by generating domain-specific and user-specific proofs that can only be used exclusively on preloaded sites. Payment processors purchase our solution to implement it, providing them with an extra layer of security and making online transactions safer for consumers and businesses. Partnering with the PCI SSC standards, ZeroKey enhances the security of financial transactions and builds trust in digital commerce, fostering a safer online ecosystem for everyone.

Aside from filoshopping, the financial industry, especially banks, will save millions of USD annually thanks to the reduction of credit card fraud transactions caused by phishing and data breaches.

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Contribution](#contribution)

## Features

- **Zero-Knowledge Proofs:** Convert credit card information into secure Zero-Knowledge proofs that eliminate the need to store sensitive data.
- **Phishing Protection:** Generate domain-specific proofs to prevent phishing attacks.
- **PCI SSD Compliant:** Enhance transaction security with PCI SSC standards compliance.
- **E-commerce Integration:** Simple integration with e-commerce platforms for seamless transactions.
- **Fraud Reduction:** Save millions by reducing fraud caused by data breaches and phishing attacks.

## Project Structure

The project consists of three main components:


## Folder structure

```bash
ZEROKEY/
│
├── backend/
│   ├── providers/
│   ├── routes/
│   ├── services/
│   ├── package.json
│   ├── server.js
│
├── circuit/
│   ├── src/
│   │   ├── main.nr
│   ├── target/
│   ├── Nargo.toml
│   └── Prover.toml
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   └── pages/
│   └── package.json
```



1. **Circuit Folder:**
   - Contains `main.nr`, used to compile the zkProof circuit in Scroll.

2. **Frontend:**
   - Provides a user interface to add credit cards and make payments using a proof of a card.

3. **Backend:**
   - Implements several endpoints for proof management and transaction processing.

## Installation

To get started with ZeroKey, follow these steps:

### Prerequisites

- Node.js
- Nargo


### Clone the Repository

```bash
git clone https://github.com/francoperez03/zerokey
cd zerokey
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Compile the Circuit
```bash
cd circuit
nargo check
nargo compile
```

## Usage

### Run the Backend Server
```bash
cd backend
npm run dev
```

### Run the Frontend Server
```bash
cd frontend
npm run dev
```
