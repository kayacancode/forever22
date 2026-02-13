function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <h1
          className="text-black uppercase tracking-tight"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(4rem, 20vw, 20rem)',
            lineHeight: 1,
          }}
        >
          FOREVER22
        </h1>
      </main>

      <footer className="py-6 px-8">
        <div className="flex items-center justify-between">
          <p className="text-black text-sm font-light">
            © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
          </p>
          <nav className="flex gap-12">
            <a href="#" className="text-black text-sm font-light hover:opacity-70 transition-opacity">
              Terms & Conditions
            </a>
            <a href="#" className="text-black text-sm font-light hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-black text-sm font-light hover:opacity-70 transition-opacity">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
