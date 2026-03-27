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
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: 'rgba(147,51,234,0.25)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: 'rgba(147,51,234,0.2)',
            border: '1px solid rgba(147,51,234,0.4)',
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7' }} />
          <span style={{ color: '#c4b5fd', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
            AGENCIA DIGITAL · MENDOZA, ARGENTINA
          </span>
        </div>

        {/* Title */}
        <div style={{ fontSize: '72px', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: '24px' }}>
          ›genmarketing
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: '28px', color: '#a3a3a3', maxWidth: '700px', lineHeight: 1.4 }}>
          Hacemos crecer tu marca en el mundo digital.
        </div>

        {/* Services pills */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '48px', flexWrap: 'wrap' }}>
          {['Diseño Web', 'Redes Sociales', 'Branding', 'SEO', 'Chatbot IA'].map((s) => (
            <div
              key={s}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#e5e5e5',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
