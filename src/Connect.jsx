import { Link } from 'react-router-dom'

function Connect() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center font-mono font-light">
          <p className="text-black text-xl mb-8">
            Building institutional intelligence
          </p>
          <a
            href="https://x.com/kayacancode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg mb-2 block hover:text-blue-500 transition-colors"
          >
            Kaya
          </a>
          <a
            href="mailto:kaya@forever22studios.com"
            className="text-blue-500 text-lg hover:opacity-70 transition-opacity"
          >
            kaya@forever22studios.com
          </a>
        </div>
      </main>

      <footer className="py-6 px-8">
        <p className="text-black text-sm font-light font-mono text-center">
          © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Connect
