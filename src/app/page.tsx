"use client"

import Image from 'next/image'
import { useState } from 'react'
import heroImage from '@/assets/hero.jpeg'

export default function Home() {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN"
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(null), 2000);
    }
  };

  return (
    <div className="antialiased">
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 font-bold text-xl">$RAYYAN</span>
            <span className="text-white font-bold text-xl">MEME</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-white">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#address" className="hover:text-yellow-400 transition-colors">Contract Address</a>
            <a href="#how-to" className="hover:text-yellow-400 transition-colors">How to Buy</a>
            <div className="relative group">
              <button className="hover:text-yellow-400 transition-colors">More</button>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold transition-colors">
            Buy Now
          </button>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-black text-white mb-4 leading-tight">
                THE ONLY<br />
                <span className="text-red-500">OFFICIAL</span><br />
                <span className="text-yellow-400">$RAYYAN</span><br />
                <span className="text-white">MEME</span>
              </h1>
              <div className="mt-8 mb-6">
                <p className="text-xl text-white mb-2">Join the Rayyan Community.</p>
                <p className="text-xl text-white">This is History in the Making!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                  BUY NOW WITH CRYPTO
                </button>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-6 max-w-lg border border-slate-700/50 shadow-lg hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified Contract Address
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1 bg-slate-900/50 rounded-lg p-3 w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full font-semibold">SOL</span>
                      <span className="text-slate-400 text-xs">Contract Address</span>
                    </div>
                    <span className="text-yellow-400 font-mono text-sm break-all select-all block">
                      {contractAddress}
                    </span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(contractAddress)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 group relative"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy
                    {copySuccess && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        {copySuccess}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <Image
                  src={heroImage}
                  alt="Rayyan Hero"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold transform rotate-12">
                  "Celebrate Our Win & Have Fun!"
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Community Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              JOIN RAYYAN'S SPECIAL<br />COMMUNITY.
            </h2>
            <div className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">
              $RAYYAN
            </div>
            <div className="text-2xl md:text-4xl font-bold text-white">
              OWN A PIECE OF HISTORY.
            </div>
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="how-to" className="py-16 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Buy Now with Crypto!
            </h2>
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-6">
                <img
                  src="https://ext.same-assets.com/2953776447/125857988.webp"
                  alt="Solana"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>
            <div className="text-center mb-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors">
                BUY NOW
              </button>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Step 1: Create a Wallet</h3>
                <p className="text-gray-300 mb-4">
                  Download Phantom or your wallet of choice from the App Store or Google Play for free.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  GET PHANTOM
                </button>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Step 2: Get Some SOL</h3>
                <p className="text-gray-300 mb-4">
                  Fund your wallet with SOL to swap for $RAYYAN
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  BUY SOL
                </button>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Step 3: Go to Raydium</h3>
                <p className="text-gray-300 mb-4">
                  Connect your wallet to Raydium.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  CONNECT RAYDIUM
                </button>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Step 4: Swap for $RAYYAN</h3>
                <p className="text-gray-300 mb-4">
                  Use your SOL to trade for $RAYYAN
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  SWAP NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contract Address Section */}
        <section id="address" className="py-20 bg-blue-950">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-4xl font-bold text-white">
                Verified Contract
              </h2>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-slate-700/50 shadow-xl hover:border-slate-600/50 transition-all duration-300">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">SOL</span>
                  <span className="text-slate-400">Official Contract Address</span>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-6 w-full">
                  <span className="text-yellow-400 font-mono text-lg break-all text-center block select-all">
                    {contractAddress}
                  </span>
                </div>
                <button 
                  onClick={() => copyToClipboard(contractAddress)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 group relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy Contract Address
                  {copySuccess && (
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1.5 px-3 rounded-lg whitespace-nowrap">
                      {copySuccess}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <a
                  href="https://x.com/RayyanMemes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://ext.same-assets.com/2953776447/3994720946.svg"
                    alt="X (Twitter)"
                    className="w-8 h-8"
                  />
                </a>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
                <a href="#how-to" className="hover:text-yellow-400 transition-colors">How to Buy</a>
                <a href="#address" className="hover:text-yellow-400 transition-colors">Contract Address</a>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 Rayyan Meme Community. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
