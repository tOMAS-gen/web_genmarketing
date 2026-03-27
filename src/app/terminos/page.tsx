import { SectionTitle } from '@/components/ui/SectionTitle';
import { CONTACT_INFO } from '@/lib/constants';

export default function TerminosPage() {
  return (
    <main className="py-20 md:py-32">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle
            title="Términos y Condiciones"
            subtitle="›genmarketing - Última actualización: 2024"
            align="left"
          />
        </div>

        <div className="space-y-8 text-neutral-700">
          <section>
            <h2 className="text-3xl font-bold text-black mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, aceptas estar vinculado por estos Términos y
              Condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor
              no utilices este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">2. Descripción del Servicio</h2>
            <p>
              ›genmarketing ofrece servicios de diseño web, gestión de redes sociales, branding,
              chatbot con IA, Google Mi Negocio y fotografía. Nos reservamos el derecho de
              modificar, suspender o descontinuar cualquier servicio.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">3. Licencia de Uso</h2>
            <p>
              Se te otorga una licencia limitada y no exclusiva para acceder y utilizar este
              sitio para fines personales. No puedes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reproducir, duplicar o copiar contenido sin autorización</li>
              <li>Vender, alquilar o transferir acceso</li>
              <li>Usar bots o scrapers</li>
              <li>Intentar obtener acceso no autorizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">4. Propiedad Intelectual</h2>
            <p>
              Todo contenido del sitio (textos, imágenes, diseños, código) es propiedad de
              ›genmarketing o está licenciado. Los trabajos realizados para clientes son
              propiedad del cliente una vez completado el pago.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">5. Contratación de Servicios</h2>
            <p>
              Al solicitar un presupuesto o contratar servicios, aceptas nuestras condiciones de
              trabajo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Los presupuestos son válidos por 30 días</li>
              <li>Se requiere un depósito del 50% para iniciar el proyecto</li>
              <li>El 50% restante debe pagarse antes de la entrega final</li>
              <li>Los cambios posteriores pueden incurrir en costos adicionales</li>
              <li>Tiempos de entrega son estimados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">6. Garantía Limitada</h2>
            <p>
              Nuestros servicios se proporcionan "tal como están". No garantizamos resultados
              específicos de marketing o tráfico. ›genmarketing no es responsable por terceros
              como proveedores de hosting o plataformas de redes sociales.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">
              7. Limitación de Responsabilidad
            </h2>
            <p>
              En la máxima medida permitida por la ley, ›genmarketing no será responsable por
              daños indirectos, incidentales, especiales o punitivos, incluyendo pérdida de
              ganancias o datos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">8. Comentarios de Usuarios</h2>
            <p>
              Cualquier comentario, retroalimentación o sugerencia que proporciones puede ser
              utilizado por ›genmarketing sin restricción ni compensación. No compartiremos
              información de identificación personal.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">9. Sitios Externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios externos. No somos responsables por el
              contenido, precisión o prácticas de estos sitios. El acceso a sitios externos es
              bajo tu propio riesgo.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">10. Indemnización</h2>
            <p>
              Aceptas indemnizar a ›genmarketing contra cualquier reclamo, daño, pérdida o gasto
              (incluyendo honorarios legales) que resulte de tu uso del sitio o incumplimiento
              de estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">11. Terminación</h2>
            <p>
              Nos reservamos el derecho de terminar o suspender tu acceso al sitio sin previo
              aviso por incumplimiento de estos términos o por cualquier otra razón.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">12. Ley Aplicable</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de Argentina. Cualquier
              disputa será resuelta en los tribunales competentes de Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">13. Cambios a los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los
              cambios serán efectivos cuando se publiquen en el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">14. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos Términos y Condiciones, contactanos en:
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
