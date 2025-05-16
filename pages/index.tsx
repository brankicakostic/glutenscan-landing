
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
<div
      style={{
        margin: 0,
        fontFamily: 'Manrope, sans-serif',
        backgroundColor: '#FAF8F3',
        color: '#3E2C22',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }}>
        <img src="/logo-mini.svg" alt="GlutenScan logo" style={{ width: '100px', height: 'auto', marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>GlutenScan dolazi uskoro</h1>
      </header>

      <p style={{ maxWidth: '600px', textAlign: 'center', fontSize: '1.1rem' }}>
        Aplikacija za brzo prepoznavanje glutena i alergena putem skeniranja barkoda. Pridružite nam se i budite među prvima koji će je koristiti.
      </p>

      <div
        style={{
          marginTop: '2rem',
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2>Prijava za rani pristup</h2>
        <p>Skeniraj QR kod ili klikni na dugme da popuniš formu:</p>
        <div style={{ position: 'relative', margin: '1rem auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="/arrow-left.png"
              alt="Strelica ka QR kodu"
              style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%) rotate(-10deg)', width: '50px' }}
            />
            <img
              src="/qr-glutenscan-forma.png"
              alt="QR kod za prijavu"
              style={{ width: '200px', display: 'block' }}
            />
          </div>
          <div style={{ fontFamily: 'Quicksand, cursive', fontSize: '1rem', marginTop: '0.5rem' }}>Prijavi se za rani pristup</div>
        </div>
        <a href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" target="_blank" rel="noreferrer">
          <button
            style={{
              backgroundColor: '#8C775D',
              color: 'white',
              border: 'none',
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
          >
            Popuni formu
          </button>
        </a>
      </div>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#8C775D' }}>
        © GlutenScan 2025 | Sva prava zadržana
      </footer>
    </div>
  );
}

