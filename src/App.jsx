import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-black font-light font-mono text-base tracking-wide mb-8">
            AI is a forever thing.
          </p>
          <h1
            className="uppercase tracking-tight color-flash"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(4rem, 20vw, 20rem)',
              lineHeight: 1,
            }}
          >
            FOREVER22
          </h1>
          <Link to="/connect" className="mt-4 text-black font-light font-mono text-lg tracking-wide block hover:opacity-70 transition-opacity">
            Connect
          </Link>
          <Link to="/companies" className="mt-2 text-black font-light font-mono text-lg tracking-wide block hover:opacity-70 transition-opacity">
            Companies
          </Link>
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

export default App
