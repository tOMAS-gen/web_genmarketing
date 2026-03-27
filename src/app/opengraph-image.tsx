import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '›genmarketing — Agencia de Marketing Digital en Mendoza';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 40%, #0f0f1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '100px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(147,51,234,0.1) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-250px',
            left: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '200px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(126,34,206,0.15) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        {/* Decorative line accent */}
        <div
          style={{
            position: 'absolute',
            left: '90px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent 10%, rgba(147,51,234,0.4) 40%, rgba(192,132,252,0.2) 70%, transparent 90%)',
          }}
        />

        {/* Large decorative › */}
        <div
          style={{
            position: 'absolute',
            right: '60px',
            bottom: '-30px',
            fontSize: '420px',
            fontWeight: 900,
            lineHeight: 0.8,
            background: 'linear-gradient(180deg, rgba(147,51,234,0.15) 0%, rgba(147,51,234,0.03) 100%)',
            backgroundClip: 'text',
            color: 'rgba(147,51,234,0.12)',
          }}
        >
          ›g
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 90px 80px 120px',
            position: 'relative',
            zIndex: 10,
            width: '100%',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '32px' }}>
            <span style={{ fontSize: '96px', fontWeight: 900, color: '#c084fc', lineHeight: 1, letterSpacing: '-0.02em' }}>
              ›gen
            </span>
            <span style={{ fontSize: '96px', fontWeight: 700, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em' }}>
              marketing
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: 500,
              color: '#a3a3a3',
              lineHeight: 1.35,
              maxWidth: '600px',
              marginBottom: '60px',
            }}
          >
            Diseño web, redes sociales y branding
            <span style={{ color: '#c084fc' }}> que generan resultados.</span>
          </div>

          {/* Bottom info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 24px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              width: 'fit-content',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px rgba(34,197,94,0.5)',
              }}
            />
            <span style={{ color: '#d4d4d4', fontSize: '18px', fontWeight: 600 }}>
              genmarketing.com.ar
            </span>
            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ color: '#737373', fontSize: '16px', fontWeight: 500 }}>
              Mendoza, Argentina
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
