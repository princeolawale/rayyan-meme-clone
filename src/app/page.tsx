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
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-blue-950/50"></div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* Main Content */}
              <div className="space-y-6 mb-12 backdrop-blur-[2px] py-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                  THE ONLY<br />
                  <span className="text-red-500 drop-shadow-lg">OFFICIAL</span><br />
                  <span className="text-yellow-400 drop-shadow-lg">$RAYYAN</span><br />
                  <span className="text-white drop-shadow-lg">MEME</span>
                </h1>
                <div className="space-y-3">
                  <p className="text-xl sm:text-2xl text-white font-medium drop-shadow-lg">Join the Rayyan Community.</p>
                  <p className="text-xl sm:text-2xl text-white font-medium drop-shadow-lg">This is History in the Making!</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-12">
                <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] relative group backdrop-blur-sm">
                  <span className="relative z-10">BUY NOW WITH CRYPTO</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Contract Address Card */}
              <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700/50 shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-white text-lg font-semibold mb-6 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified Contract Address
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="bg-slate-900/40 rounded-xl p-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-semibold">SOL</span>
                      <span className="text-slate-300">Official Contract Address</span>
                    </div>
                    <span className="text-yellow-400 font-mono text-lg break-all select-all block text-center">
                      {contractAddress}
                    </span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(contractAddress)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-base transition-all duration-300 flex items-center justify-center gap-3 group relative mx-auto backdrop-blur-sm"
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
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
