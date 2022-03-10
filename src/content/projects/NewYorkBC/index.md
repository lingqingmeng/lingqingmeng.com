---
date: '2016-11-16'
title: 'Secure ID Tech Startup'
image: ''
github: 'https://medium.com/@decentral/new-york-goes-blockchain-ec1f04560124'
external: 'https://www.youtube.com/watch?v=IvVbyLeSIRI'
tech:
  - Rust
  - WASM
  - NPM
  - Yarn
  - Crates.io
show: 'true'
---

### Overview

A US based startup, commissioned to design an end-to-end digital identity solution that would enable customers to validate and share identity information. Traditionally this would involve sending ID documents and private keys over insecure channels (e.g. email) and expensive KYC and compliance processes. The client had a very tight timeframe for development.

### Answer

Within a few months of using the product, the Secure ID Startup developed an end-to-end Software as a Service supporting KYC providers, issuers, 3rd party application developers, and end-users. Their team collaborated in real time on the product's browser interface by designing a backend for issuers allowing them to validate individual information and generate digital certificates. The team was able to check updates with a streamlined mobile interface that gave them the most important information on each work item as they become completed. The backend relied on a hardware security module for digital signing of certificates.

![](https://s3-us-west-2.amazonaws.com/fireteam-alpha/https-decentral-solutions-cdn/DSC00559_preview.jpeg)

Our team then integrated the solution with different KYC providers enabling document recognition, and basic validation. The final solution supported a variety of IDs from over 190 countries. Then the team leveraged Decentral's available API end points that focused on digital identity wallet for iOS and Android devices. The wallets leveraged mobile phone secure element processors to sign all transactions in hardware ensuring high levels of security.

![](https://s3-us-west-2.amazonaws.com/fireteam-alpha/https-decentral-solutions-cdn/DSC00698_preview.jpeg)

The Customer's end user facing product also had additional restrictions for age and region. They reserved the right to withhold funds on accounts that violated the privacy policy. This aspect of the token was designed and tested fully prior to the main release, to meet those requirements without interfering core functionality.

![](https://s3-us-west-2.amazonaws.com/fireteam-alpha/https-decentral-solutions-cdn/DSC00474_preview.jpeg)

From ongoing developments on the business and engineering front, a new engagement was initiated as we adapted to the shifting requirements. We made a key realization that a 3 party escrow contract was integral in the MVP product. The MVP App, a user interface that serves as a platform for predictions and market making. The Escrow facilitates deals between disjoint parties while still maintaining key criteria for access.
