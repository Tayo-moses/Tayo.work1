import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Tayo Adebayo — Product Designer' },
      {
        name: 'description',
        content:
          'Product designer and founder based in Lagos, Nigeria. Leading design at Rivy and building products for African businesses.',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '17px',
            color: 'var(--ink)',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Tayo Adebayo
        </a>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {[
            { label: 'Work', href: '/#work' },
            { label: 'Writing', href: '/#writing' },
            { label: 'Contact', href: 'mailto:hi@tayo.work' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-underline"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--ink-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--ink)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--ink-secondary)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
