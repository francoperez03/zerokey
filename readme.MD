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
- **PCI SSC Compliant:** Enhance transaction security with PCI SSC standards compliance.
- **Fraud Reduction:** Save millions by reducing fraud caused by data breaches and phishing attacks.

## Project Structure

### Contrato verificador
[Contrato verificado  en ScrollScan](https://sepolia.scrollscan.com/address/0x31563b09193329e6836144c54d81e8d25453908e#code)

### Folder structure

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


1. **Backend:**
   - Implements several endpoints for proof management and transaction processing.


2. **Circuit:**
   - Contains `main.nr`, used to compile the zkProof circuit in Scroll.

2. **Frontend:**
   - Provides a user interface to add credit cards and make payments using a proof of a card.



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

## API Endpoints

### Registering a Card:
The POST /proofs endpoint is used to register a credit card within the system. This process involves creating a proof associated with the card and its user.  

**POST /proofs**  
This endpoint accepts a POST request with several arguments necessary for registering a credit card. Below are the arguments and their descriptions:  
Arguments:  
- cvv: (string) The card's security code, typically a 3 or 4-digit number known as the CVV (Card Verification Value). This is a sensitive field.  

- pan: (string) The Primary Account Number, or the credit card number itself. This is a unique identifier for the card and is essential for processing transactions.  

- expiryDate: (string) The expiration date of the card, usually in the format MM/YY or MM/YYYY. This field is used to verify that the card is still valid.  

- email: (string) The email address of the user to whom the card belongs. This allows for association of the card with a specific user account and facilitates communication or notifications.  

- name: (string) A friendly name assigned to the card. This can be used for easy identification of the card within the user's account, especially if they have multiple cards.  

- ttl: (integer) The time-to-live of the proof in seconds. This determines how long the proof remains valid before it expires and needs to be regenerated.  

#### List all the Cards for an email:
**GET /proofs**  
This endpoint retrieves a list of all registered credit cards associated with a specific email address. It's useful for displaying all card information linked to a user, typically in a user dashboard or account management system.  
Query:  
- email: (string) The email address associated with the user's registered credit cards. This argument is required to identify and return the relevant cards.  

example:
```bash
GET /proofs?email=user@example.com
```

### Use a proof to purchase a product      
**POST /purchase**  
This endpoint accepts a POST request with specific arguments required to initiate a purchase. It validates the proof associated with the user's card, processes the transaction, and returns a response indicating the success or failure of the purchase.  
Arguments:  
- email: (string) The email address of the user to whom the card belongs. This allows for association of the card with a specific user account and facilitates communication or notifications.  

- name: (string) A friendly name assigned to the card. This can be used for easy identification of the card within the user's account, especially if they have multiple cards.  


### Verify the proof using a smart contract
**POST /verify**  
This endpoint accepts a POST request with specific arguments required to verify a proof. It sends the proof to the smart contract, which performs the necessary checks to validate the proof's authenticity and correctness.  
Arguments:  
- proof: (string): The cryptographic proof that needs to be verified. This argument contains the proof data in a hexadecimal string format, which is required by the smart contract for validation. The proof must be formatted correctly and match the expected structure defined in the smart contract.  

