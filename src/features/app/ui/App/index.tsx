// React
import { useEffect } from 'react'

// React Router DOM
import { useNavigate } from 'react-router-dom'

const App = () => {
  // Hook
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/back-office/todo')
  }, [navigate])

  return <h1>Entry Point</h1>
}

export { App }
