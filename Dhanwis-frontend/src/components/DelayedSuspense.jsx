import { useState, useEffect } from 'react'

const DelayedSuspense = ({ children, fallback, delay = 1000 }) => {
  const [showFallback, setShowFallback] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(false)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return showFallback ? fallback : children
}

export default DelayedSuspense
