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

In this post, we aim to familiarize the reader with some tools to implement Zk-SNARKs on ethereum. Recently, a lot has been written on zero knowledge proofs, however even then the math behind zero knowledge proofs remains to be “cryptic” and hard to grasp. For an uninitiated reader, Introduction to zk-SNARKs and Quadratic Arithmetic Programs serve as excellent resources to start reading about Zk-SNARKs and this post will help the reader put them to practice while treating the math behind as a black box.

**What does a general-purpose succinct ZKP do?**

Suppose that you have a (public) `function C()`, a (private) input `x` and a (public) output `y`. You want to prove that you know an `x` such that `C(x) = y`, without revealing what `x` is. Furthermore, for the proof to be succinct, you want it to be verifiable much more quickly than computing `C()` itself.

A Zk-SNARKs computation needs to be initialized by a trusted party. This involves modifying the computation `C` into a circuit format and using a secret parameter _lambda_ to generate the proving and verifying keys that are used later. Following this, _lambda_ - also called the "waste" needs to be destroyed - otherwise it will enable an adversary to generate fake proofs of the knowledge. For this reason, the Zcash team - a fork of bitcoin that’s based on zK-SNARKs and lets one perform _shielded_ transactions conducted an elaborate ceremony to generate these keys. Zcash has optional _shielded_ transactions that let you transfer hidden amounts to hidden addresses.

Now, when a prover wishes to prove to they know an answer to the computation `C()`, they will generate a proof using the proving key, public inputs `x` and secret input `w`. When the verifier wants to verify that answer to the computation is indeed correct, they would verify the proof using the verifier key, public inputs `x` and proof.

There is a whole class of cryptographic/security systems which rely on what are called _"trapdoor functions"_. The idea is that they are functions which are generally easy to compute, but for which finding the inverse is very hard. One such example is the function that takes two integers and multiplies them together (something we can do very easily), versus the "inverse", which is a function that takes an integer and gives you proper factors (given `n`, two numbers `p` and `q` such that `pq=n` and `1 < p,q < n` ). Infact RSA derives its security from this trapdoor; difficulty of factoring integers that are the product of two large prime numbers. Multiplying these two numbers is easy, but determining the original prime factors is considered infeasible. Let's say you were able to break a large number being used in the RSA key and you want to prove that you possess knowledge of the factors of the key - without divulging the factors themselves. We will write code enable a participant to do so.

First, we will setup zokrates on our local machine and run it as a docker container.
