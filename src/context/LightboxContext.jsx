import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [state, setState] = useState({
    open: false,
    images: [],
    index: 0,
  })

  const openLightbox = useCallback((images, index = 0) => {
    if (!images?.length) return
    setState({
      open: true,
      images,
      index: Math.min(Math.max(0, index), images.length - 1),
    })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setState((s) => ({ ...s, open: false }))
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    setState((s) => ({
      ...s,
      index: (s.index + 1) % s.images.length,
    }))
  }, [])

  const goPrev = useCallback(() => {
    setState((s) => ({
      ...s,
      index: (s.index - 1 + s.images.length) % s.images.length,
    }))
  }, [])

  useEffect(() => {
    if (!state.open) return

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state.open, closeLightbox, goNext, goPrev])

  return (
    <LightboxContext.Provider
      value={{ ...state, openLightbox, closeLightbox, goNext, goPrev }}
    >
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}
