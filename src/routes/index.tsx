import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

const projects = [
  {
    name: 'Rivy',
    description: 'Climate finance infrastructure powering clean energy access in Africa.',
    category: 'Climate · Finance',
    url: 'https://rivy.co',
  },
  {
    name: 'EnergyStack',
    description: 'A curated storefront for reliable solar products in Nigeria.',
    category: 'E-commerce · Energy',
    url: 'https://energystack.rivy.co/',
  },
  {
    name: 'Leafmover',
    description: 'A modern platform helping African businesses run and grow online.',
    category: 'SaaS · Commerce',
    url: 'https://leafmover.com',
  },
  {
    name: 'Copicart',
    description: 'An ecommerce marketplace built for modern African brands.',
    category: 'Marketplace',
    url: '#',
  },
]

const media = [
  {
    publication: 'The Guardian',
    title: 'The designers reimagining African digital infrastructure',
    year: '2024',
    url: 'https://guardian.ng/features/how-firstangles-tayo-adebayo-is-making-a-difference-in-the-nigerian-tech-space/',
  },
  {
    publication: 'Vanguard',
    title: 'How Tayo Adebayo is shaping the future of clean energy design in Nigeria',
    year: '2023',
    url: 'https://guardian.ng/features/how-firstangles-tayo-adebayo-is-making-a-difference-in-the-nigerian-tech-space/',
  },
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/tayoadebayo.m/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tayoadebayo/' },
  { label: 'Email', href: 'mailto:hi@tayo.work' },
]

export default function Portfolio() {
  return (
    <main
      style={{
        backgroundColor: 'var(--bg)',
        minHeight: '100vh',
      }}
    >
      {/* Hero */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 40px 100px',
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          {/* Location pill */}
          <div
            className="animate-in"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#5A8A5A',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '13px',
                color: 'var(--ink-secondary)',
                letterSpacing: '0.03em',
              }}
            >
              Lagos, Nigeria
            </span>
          </div>

          {/* Name */}
          <h1
            className="animate-in delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              margin: '0 0 12px',
              whiteSpace: 'nowrap',
            }}
          >
            Tayo Adebayo
          </h1>

          {/* Title */}
          <p
            className="animate-in delay-2"
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-secondary)',
              margin: '0 0 40px',
            }}
          >
            Product Designer
          </p>

          {/* Bio */}
          <div
            className="animate-in delay-3"
            style={{ marginBottom: '56px' }}
          >
            {[
              'I live in Lagos, Nigeria.',
              'I founded Firstangle, a design agency company. We worked on a couple of brand identity projects for company in Nigeria, UK and the US. But, we are pivoting to industrial design agency.',
              'I currently work at Rivy, where I lead design for product like Energystack and Rivy, leading the adoption of clean energy and making energy, power accessible for Africans through financing.',
              'I founded Leafmover, an AI-driven tool that helps small businesses sell their products and services online. We created Copicart, an ecommerce store for gadgets and everyday essentials.',
              "At my core, I'm a designer who loves crafting products with a high level of polish.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: i === 0 ? 'var(--ink-secondary)' : 'var(--ink)',
                  marginBottom: i < 4 ? '20px' : 0,
                  fontWeight: 300,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Social links */}
          <div
            className="animate-in delay-4"
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
                style={{
                  fontSize: '13px',
                  color: 'var(--ink-secondary)',
                  textDecoration: 'none',
                  fontWeight: 400,
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--ink)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--ink-secondary)')
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <div style={{ height: '1px', backgroundColor: 'var(--rule)' }} />
      </div>

      {/* Projects */}
      <section
        id="work"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '100px 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '60px',
          }}
        >
          <span className="section-label animate-in">Projects</span>
          <span
            className="animate-in"
            style={{ fontSize: '12px', color: 'var(--ink-tertiary)' }}
          >
            {projects.length} projects
          </span>
        </div>

        <div>
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-row animate-in delay-${i + 2}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '32px 0',
                textDecoration: 'none',
                color: 'inherit',
                gap: '24px',
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '20px',
                    marginBottom: '8px',
                    flexWrap: 'nowrap',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '24px',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      margin: 0,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {project.name}
                  </h3>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-tertiary)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--ink-secondary)',
                    margin: 0,
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {project.description}
                </p>
              </div>
              <div
                className="project-arrow"
                style={{
                  flexShrink: 0,
                  color: 'var(--ink-secondary)',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <div style={{ height: '1px', backgroundColor: 'var(--rule)' }} />
      </div>

      {/* Media / Writing */}
      <section
        id="writing"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '100px 40px',
        }}
      >
        <div style={{ marginBottom: '60px' }}>
          <span className="section-label animate-in">Press &amp; Writing</span>
        </div>

        <div>
          {media.map((item, i) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`media-row animate-in delay-${i + 2}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr 60px',
                alignItems: 'center',
                gap: '32px',
                padding: '28px 0',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-tertiary)',
                }}
              >
                {item.publication}
              </span>
              <span
                style={{
                  fontSize: '16px',
                  color: 'var(--ink)',
                  fontWeight: 300,
                  lineHeight: 1.45,
                  transition: 'opacity 0.2s ease',
                }}
                className="link-underline"
              >
                {item.title}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  color: 'var(--ink-tertiary)',
                  textAlign: 'right',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {item.year}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Mobile nav padding compensation */}
      <style>{`
        @media (max-width: 640px) {
          .site-nav > div {
            padding: 0 20px !important;
          }
          .media-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .media-row > span:last-child {
            text-align: left !important;
          }
        }
      `}</style>
    </main>
  )
}
