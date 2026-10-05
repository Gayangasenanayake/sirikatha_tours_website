'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { createContext, type MouseEvent as ReactMouseEvent, type ReactNode, useContext, useEffect, useState } from 'react'
import { CarFront, Plane, TrainFront } from 'lucide-react'

export function NavigationLoaderProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [pathname])

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a')
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (link.target === '_blank' || link.hasAttribute('download')) return
      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return
      setLoading(true)
    }

    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [])

  return (
    <NavigationLoaderContext.Provider value={setLoading}>
      {children}
      {loading && (
        <div className="navigation-loader fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0d3533] text-white" role="status" aria-live="polite" aria-label="Preparing your journey">
          <div className="navigation-loader-sun absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e7a94b]/15 blur-3xl" />
          <div className="navigation-loader-route absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#f3bf62]/70 to-transparent" />
          <div className="navigation-loader-content relative flex flex-col items-center gap-7">
            <div className="navigation-loader-journey-icons flex items-center gap-3 rounded-full border border-[#f3bf62]/50 bg-[#173f3b]/70 px-5 py-4 shadow-[0_0_50px_rgba(231,169,75,.16)] backdrop-blur-sm">
              <span className="navigation-loader-icon rounded-full bg-white/10 p-2 text-[#f3bf62]"><CarFront size={20} strokeWidth={1.7} /></span>
              <span className="h-px w-5 bg-gradient-to-r from-[#f3bf62] to-white/60" />
              <span className="navigation-loader-icon navigation-loader-icon-delay rounded-full bg-white/10 p-2 text-white"><TrainFront size={20} strokeWidth={1.7} /></span>
              <span className="h-px w-5 bg-gradient-to-r from-white/60 to-[#f3bf62]" />
              <span className="navigation-loader-icon navigation-loader-icon-delay-two rounded-full bg-white/10 p-2 text-[#f3bf62]"><Plane size={20} strokeWidth={1.7} /></span>
            </div>
            <div className="text-center">
              <p className="navigation-loader-brand font-serif text-3xl">Your journey awaits<span className="text-[#e7a94b]">.</span></p>
              <p className="navigation-loader-caption mt-2 text-[10px] uppercase tracking-[0.28em] text-white/60">Finding your next Sri Lankan escape</p>
            </div>
            <div className="navigation-loader-progress h-px w-44 overflow-hidden bg-white/15"><span className="block h-full w-1/2 bg-[#f3bf62]" /></div>
          </div>
        </div>
      )}
    </NavigationLoaderContext.Provider>
  )
}

const NavigationLoaderContext = createContext<(loading: boolean) => void>(() => undefined)

export function LoadingLink({ children, onClick, ...props }: LinkProps & { children: ReactNode; onClick?: (event: ReactMouseEvent<HTMLAnchorElement>) => void }) {
  const setLoading = useContext(NavigationLoaderContext)
  return <Link {...props} onClick={(event) => { onClick?.(event); if (!event.defaultPrevented) setLoading(true) }}>{children}</Link>
}

export function useNavigationLoader() {
  return useContext(NavigationLoaderContext)
}
