# Privacy-Preserving Document Verification using Zero-Knowledge Proofs

## Overview

This project implements a privacy-preserving document verification framework using OCR, Poseidon Hash, Circom, and Groth16 zk-SNARKs. It enables users to prove document attributes without revealing sensitive information.

The framework is document-agnostic and can be extended to identity cards, passports, academic certificates, healthcare documents, and other structured documents.

---

## System Architecture

```
Document (Image/PDF)
        ↓
OCR / Text Extraction
        ↓
Attribute Extraction
        ↓
Poseidon Hash
        ↓
Circom Circuit
        ↓
Witness Generation
        ↓
Proof Generation
        ↓
Verification
        ↓
Valid Proof
```

---

## Project Structure

```
zk-document-verification
│
├── circuits
│     └── documentVerifier.circom
│
├── Scripts
│     ├── extract.js
│     ├── preprocess.js
│     ├── hash.js
│     └── pdfExtract.js
│
├── input.json
├── package.json
├── README.md
└── .gitignore
```

---

## Technologies Used

- Circom
- SnarkJS
- Poseidon Hash
- Groth16 zk-SNARKs
- Node.js
- OCR
- PDF Parsing

---

## Workflow

1. Accept document input (Image or PDF).
2. Extract attributes using OCR or text parsing.
3. Convert extracted information into a suitable representation.
4. Generate Poseidon hash commitments.
5. Verify constraints using a Circom circuit.
6. Generate witness and zk-SNARK proof.
7. Verify the proof without revealing document contents.

---

## Applications

- Identity Verification
- Privacy-Preserving KYC
- Passport Verification
- Academic Certificate Verification
- Healthcare Credential Verification
- Government Document Verification

---

## Future Work

- Multi-attribute verification
- Age verification (Age ≥ 18)
- Gender verification
- Batch proof generation
- QR code extraction
- Digital signature verification
- On-chain smart contract verification

---

## Author

**Adithya Gaddam**  
B.Tech Computer Science and Engineering  
SRM University AP
