'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-neutral-600 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors';

const selectClass =
  inputClass + ' [&>option]:bg-neutral-900 [&>option]:text-white';

export default function PresupuestoPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', siteType: '',
    service: '', budget: '', hasLogo: false, message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', siteType: '', service: '', budget: '', hasLogo: false, message: '' });
    }, 3000);
  };

  return (
    <main className="bg-neutral-950 min-h-screen">

      {/* Hero */}
      <section className="mesh-bg-dark pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Sin costo · Sin compromiso
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
          >
            Pedí tu
            <br />
            <span className="gradient-text-white">Presupuesto</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-400 text-lg max-w-lg mx-auto"
          >
            Te enviamos una propuesta personalizada en menos de 24 horas.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Steps */}
      <section className="py-12 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Completá el formulario', desc: 'Contanos sobre tu proyecto' },
              { num: '02', title: 'Análisis personalizado',  desc: 'Evaluamos tu caso en detalle' },
              { num: '03', title: 'Recibís tu propuesta',    desc: 'Presupuesto a medida en 24h' },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <span className="text-2xl font-black text-purple-600/30 leading-none flex-shrink-0 mt-0.5">{step.num}</span>
                <div>
                  <h3 className="font-black text-white text-sm mb-1">{step.title}</h3>
                  <p className="text-neutral-500 text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Personal */}
            <div>
              <h2 className="text-lg font-black text-white mb-5 pb-3 border-b border-white/5">Tus Datos</h2>
              <div className="space-y-3">
                <input type="text"  name="name"  value={formData.name}  onChange={handleChange} required placeholder="Nombre completo *" className={inputClass} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email *"            className={inputClass} />
                <input type="tel"   name="phone" value={formData.phone} onChange={handleChange}         placeholder="Teléfono"             className={inputClass} />
              </div>
            </div>

            {/* Project */}
            <div>
              <h2 className="text-lg font-black text-white mb-5 pb-3 border-b border-white/5">Tu Proyecto</h2>
              <div className="space-y-3">
                <select name="service"  value={formData.service}  onChange={handleChange} required className={selectClass}>
                  <option value="">Seleccioná un servicio *</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="redes-sociales">Gestión de Redes Sociales</option>
                  <option value="branding">Branding y Diseño</option>
                  <option value="chatbot">Chatbot con IA</option>
                  <option value="google-mi-negocio">Google Mi Negocio</option>
                  <option value="fotografia">Fotografía</option>
                </select>
                <select name="siteType" value={formData.siteType} onChange={handleChange} className={selectClass}>
                  <option value="">Tipo de sitio (si aplica)</option>
                  <option value="landing">Landing Page</option>
                  <option value="corporativo">Sitio Corporativo</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
                <select name="budget" value={formData.budget} onChange={handleChange} className={selectClass}>
                  <option value="">Presupuesto estimado</option>
                  <option value="<100k">Menos de $100.000</option>
                  <option value="100k-250k">$100.000 - $250.000</option>
                  <option value="250k-500k">$250.000 - $500.000</option>
                  <option value=">500k">Más de $500.000</option>
                </select>
                <label className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 cursor-pointer hover:border-purple-700/30 transition-colors">
                  <input
                    type="checkbox"
                    name="hasLogo"
                    checked={formData.hasLogo}
                    onChange={handleChange}
                    className="w-4 h-4 rounded accent-purple-600"
                  />
                  <span className="text-neutral-300 text-sm">Ya tengo logo/identidad visual definida</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <h2 className="text-lg font-black text-white mb-5 pb-3 border-b border-white/5">Detalles Adicionales</h2>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Contanos más sobre tu proyecto, tus objetivos y cualquier detalle importante..."
                className={inputClass + ' resize-none'}
              />
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3">
              {[
                'Presupuesto personalizado',
                'Respuesta en 24 horas',
                'Sin costo ni compromiso',
                'Asesoramiento incluido',
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-neutral-400 text-xs">{b}</span>
                </div>
              ))}
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Solicitar Presupuesto
            </Button>

            {submitted && (
              <div className="p-4 bg-green-900/30 border border-green-500/30 rounded-xl">
                <p className="text-green-400 font-semibold text-sm">
                  ✓ Presupuesto solicitado. Nos contactaremos pronto.
                </p>
              </div>
            )}

            <div className="flex items-center gap-3 text-xs text-neutral-600">
              <div className="flex-1 h-px bg-white/5" />
              <span>o si preferís</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <a
              href={`${SOCIAL_LINKS.whatsapp}?text=Hola%2C%20quiero%20pedir%20un%20presupuesto`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] font-semibold text-sm transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L0 24l6.335-1.505A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.002-1.368l-.359-.214-3.721.884.94-3.63-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </form>
        </div>
      </section>
    </main>
  );
}
