import { useState, useEffect } from 'react'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#login' ? 'login' : 'signup'
  })

  useEffect(() => {
    const handleHashChange = () => {
      const page = window.location.hash.replace('#', '')
      if (page === 'login' || page === 'signup') {
        setCurrentPage(page)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (page) => {
    window.location.hash = page
    setCurrentPage(page)
  }

  return (
    <>
      {currentPage === 'login' ? (
        <Login onNavigateToSignup={() => navigateTo('signup')} />
      ) : (
        <Signup onNavigateToLogin={() => navigateTo('login')} />
      )}
    </>
  )
}

export default App
