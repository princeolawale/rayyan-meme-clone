import Image from 'next/image'

export default function Home() {
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
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 mb-6 max-w-lg">
                <h3 className="text-white text-lg font-semibold mb-3">Solana Contract Address</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex items-center space-x-2 flex-1">
                    <span className="bg-black text-white px-2 py-1 rounded text-sm">CA</span>
                    <span className="text-yellow-400 text-sm font-mono break-all">
                      6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN
                    </span>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors whitespace-nowrap">
                    Copy Address
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  src="https://ext.same-assets.com/2953776447/125857988.webp"
                  alt="Trump figure"
                  className="w-full max-w-md mx-auto"
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
        <section id="address" className="py-16 bg-blue-950">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-8">
              Solana Contract Address
            </h2>
            <div className="bg-slate-800 rounded-lg p-6 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="bg-black text-white px-3 py-2 rounded font-mono">CA:</span>
                <span className="text-yellow-400 font-mono text-lg break-all text-center sm:text-left">
                  6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN
                </span>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition-colors whitespace-nowrap">
                  Copy Address
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md">
                <button className="w-full text-left p-6 focus:outline-none">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Is this an official Rayyan product?
                    </span>
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <button className="w-full text-left p-6 focus:outline-none">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      What is the official contract address and symbol for the Rayyan Meme?
                    </span>
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <button className="w-full text-left p-6 focus:outline-none">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      How can I get Rayyan Memes?
                    </span>
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <button className="w-full text-left p-6 focus:outline-none">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Which blockchain network are the Rayyan Memes minted?
                    </span>
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
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
