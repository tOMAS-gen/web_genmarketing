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
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background gradient mesh */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(147,51,234,0.35) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-50px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(126,34,206,0.25) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.15,
            backgroundImage:
              'linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Large decorative › */}
        <div
          style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '500px',
            fontWeight: 900,
            color: 'rgba(147,51,234,0.08)',
            lineHeight: 1,
          }}
        >
          ›
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 90px',
            position: 'relative',
            zIndex: 10,
            width: '100%',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              borderRadius: '999px',
              background: 'rgba(147,51,234,0.25)',
              border: '1.5px solid rgba(147,51,234,0.5)',
              marginBottom: '40px',
              width: 'fit-content',
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a855f7' }} />
            <span style={{ color: '#c4b5fd', fontSize: '16px', fontWeight: 700, letterSpacing: '0.15em' }}>
              AGENCIA DE MARKETING DIGITAL
            </span>
          </div>

          {/* Logo / Title */}
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
            <span style={{ fontSize: '86px', fontWeight: 900, color: '#c084fc', lineHeight: 1 }}>
              ›gen
            </span>
            <span style={{ fontSize: '86px', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
              marketing
            </span>
          </div>

          {/* Subtitle */}
          <div style={{ fontSize: '32px', color: '#a3a3a3', lineHeight: 1.4, maxWidth: '650px', marginBottom: '50px' }}>
            Hacemos crecer tu marca en el mundo digital.
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span style={{ color: '#9333ea', fontSize: '18px', fontWeight: 700 }}>genmarketing.com.ar</span>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#525252' }} />
            <span style={{ color: '#525252', fontSize: '16px', fontWeight: 600 }}>Mendoza, Argentina</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
