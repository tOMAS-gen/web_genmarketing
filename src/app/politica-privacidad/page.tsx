import type { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de ›genmarketing. Conocé cómo recopilamos, usamos y protegemos tu información personal.',
  alternates: { canonical: 'https://genmarketing.com.ar/politica-privacidad' },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="py-20 md:py-32">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-black leading-tight mb-2">Política de Privacidad</h1>
          <p className="text-neutral-400 text-sm">›genmarketing — Última actualización: 2024</p>
        </div>

        <div className="space-y-8 text-neutral-700">
          <section>
            <h2 className="text-3xl font-bold text-black mb-4">1. Introducción</h2>
            <p>
              ›genmarketing ("nosotros", "nuestro" o "la empresa") nos comprometemos a proteger
              tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos,
              compartimos y protegemos tu información personal.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">2. Información que Recopilamos</h2>
            <p>Recopilamos información de las siguientes maneras:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Información directa:</strong> Nombre, email, teléfono, empresa, cuando
                completas formularios
              </li>
              <li>
                <strong>Información automática:</strong> Tipo de navegador, dirección IP, páginas
                visitadas, duración de visita
              </li>
              <li>
                <strong>Cookies:</strong> Datos de rastreo para mejorar tu experiencia
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">3. Cómo Usamos tu Información</h2>
            <p>Utilizamos tu información para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder a tus consultas y solicitudes</li>
              <li>Enviar actualizaciones sobre nuestros servicios</li>
              <li>Mejorar nuestro sitio web y experiencia del usuario</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Prevenir fraude y abusos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">4. Compartir Información</h2>
            <p>
              No compartimos tu información personal con terceros sin tu consentimiento, excepto:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Con proveedores de servicios necesarios para operar el sitio</li>
              <li>Cuando la ley lo requiera</li>
              <li>Para proteger derechos y seguridad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">5. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizacionales para proteger tu
              información contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">6. Derechos del Usuario</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acceder a tu información personal</li>
              <li>Solicitar corrección de datos incorrectos</li>
              <li>Solicitar eliminación de tu información</li>
              <li>Revocar consentimiento en cualquier momento</li>
              <li>Solicitar restricción del procesamiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">7. Cookies</h2>
            <p>
              Utilizamos cookies para mejorar tu experiencia. Puedes controlar las cookies a
              través de la configuración de tu navegador. Algunas cookies son esenciales para el
              funcionamiento del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">8. Enlaces Externos</h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios externos. No somos responsables por
              las prácticas de privacidad de estos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">9. Cambios a esta Política</h2>
            <p>
              Nos reservamos el derecho de modificar esta Política en cualquier momento. Los
              cambios serán efectivos cuando se publiquen en el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">10. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos,
              contactanos en:
            </p>
            <p>
              <strong>Email:</strong> {CONTACT_INFO.email}
              <br />
              <strong>Teléfono:</strong> {CONTACT_INFO.phone}
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
