import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#080b10',
        color: '#f4f7f8',
        display: 'grid',
        placeItems: 'center',
        padding: '30px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <section
        style={{
          width: 'min(700px, 100%)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '25px',
            color: '#c7ff3d',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.15em',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#c7ff3d',
            }}
          />
          SHIKSHAMDEHI
        </div>

        <div
          style={{
            fontSize: 'clamp(100px, 20vw, 190px)',
            lineHeight: 0.8,
            fontWeight: 900,
            letterSpacing: '-0.08em',
            color: '#c7ff3d',
          }}
        >
          404
        </div>

        <h1
          style={{
            margin: '35px 0 15px',
            fontSize: 'clamp(35px, 6vw, 60px)',
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
          }}
        >
          This page went
          <br />
          <span style={{ color: '#c7ff3d' }}>
            off the grid.
          </span>
        </h1>

        <p
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            color: '#9da8af',
            fontSize: '15px',
            lineHeight: 1.7,
          }}
        >
          The page you are looking for does not exist or may have
          moved. Let&apos;s get you back to ShikshamDehi.
        </p>

        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 20px',
              borderRadius: '9px',
              background: '#c7ff3d',
              color: '#080b10',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 800,
            }}
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <Link
            href="/programs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 20px',
              borderRadius: '9px',
              border: '1px solid #202a33',
              background: '#0e131a',
              color: '#f4f7f8',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 800,
            }}
          >
            Explore Programs
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
