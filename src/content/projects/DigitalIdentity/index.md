---
date: '2019-03-11'
title: 'Creator Content Management System'
image: ''
github: 'https://medium.com/@decentral/claiming-your-digit-30de946c7536'
external: 'https://www.youtube.com/watch?v=aLC-bNitw7Y&t=1272s'
tech:
  - Grin
  - MimbleWimble
  - Ring Signatures
  - ZK Snarks
show: 'true'
---

### Overview

A content creator based in Los Angeles faced a recurring challenges centered around getting their company to scale. The content creator started a YouTube and Twitch.tv channel centered around blockchain education to make higher education more affordable.

### Answer

Over the span of multiple weeks our product provided the website and media materials, and turned their multi-faceted problem into a specific one. First we let the client fully define the problem in terms of his scope of expertise, which was building and scaling small startups. From those requirements we were able to provide a prototype and whitepaper that details the necessary blockchain protocols needed to solve the content creation problem in each subdomain.

The content creator's blueprint was a collaborative effort between experts in social economics, policy and blockchain developers. They were able to use decentral's product and took ownership of authoring sections for the underlying technology, token distribution model, engineering roadmap.

This included:

- Network Architecture Diagram
- Formal mathematical definition of consensus algorithms used
- Block propagation examples

The content creator has publicly released the metrics collected, they have exceeded expectations for past conversion metrics.

In parallel, Decentral managed product integration by working with the customer's European remote engineering team. The Project was to build a web application that interfaced with a cross-chain bridge that increased transaction volume month over month and allowed the customer to access an incredibly large foreign market.

Each week the customer delivered product requirement documents to be translated into a set of concrete tasks to be assigned to the remote engineers. Notable features:

- Three step handshake that initiates a creator-publisher relationship
- Chat/DM component that integrates and approves handshake end to end
- Multi-step payment form via API calls for onboarding user subscriptions

The customer's token will be the eventual accepted type of payment, however this functionality was complex. This engagement had a strict timeline; they could not afford to get blocked by the Token creation sprint. During this time a custom ERC20 token was the solution. This filler token implements the same interface as the final token. By abstracting out token address into an app config field we resumed development multi-step payment and handshake flows with minimal delay.
