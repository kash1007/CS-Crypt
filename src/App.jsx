import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import HomePage from './pages/Home'
import TeamPage from './pages/team'
import AboutUsPage from './pages/AboutUs'
import EncryptDecryptPage from './pages/EncryptDecrypt'
import FAQs from './components/faqs'
import PixelBlast from './utils/pixelblast'
import Footer from './utils/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home'
  })

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage)
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'encrypt':
        return <EncryptDecryptPage />
      case 'about':
        return <AboutUsPage />
      case 'team':
        return <TeamPage />
      case 'home':
      default:
        return <HomePage />
    }
  }

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', position: 'relative' }}>

      <PixelBlast
        color="#ffa212"
        variant="square"
        pixelSize={4}
        speed={0.4}
        enableRipples={true}
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
      />

      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.25rem 2.5rem',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(20, 20, 25, 0.3)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        position: 'fixed',
        width: 'max-content',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '25px',
        borderRadius: '100px',
        zIndex: 50,
        boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 5px rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Button onClick={() => setCurrentPage('home')}>Home</Button>
          <Button onClick={() => setCurrentPage('encrypt')}>Encrypt/Decrypt</Button>
          <Button onClick={() => setCurrentPage('about')}>About Us</Button>
          <Button onClick={() => setCurrentPage('team')}>Team</Button>
        </div>
      </nav>

      <main style={{ minHeight: '100vh', width: '100%', position: 'relative', zIndex: 10 }}>
        {renderPage()}
      </main>

      {currentPage === 'home' && (
        <div style={{ position: 'relative', zIndex: 10, width: '100%', padding: '2rem' }}>
          <FAQs />
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App


