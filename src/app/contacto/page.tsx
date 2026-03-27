'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { useState } from 'react';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-neutral-600 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors';

const contactItems = [
  { icon: Mail,   label: 'Email',     key: 'email'   as const, href: (v: string) => `mailto:${v}` },
  { icon: Phone,  label: 'Teléfono',  key: 'phone'   as const, href: (v: string) => `tel:${v}` },
  { icon: MapPin, label: 'Ubicación', key: 'address' as const, href: null },
  { icon: Clock,  label: 'Horarios',  key: 'hours'   as const, href: null },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <main className="bg-neutral-950 min-h-screen">

      {/* Hero */}
      <section className="mesh-bg-dark pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Hablemos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
          >
            Tu proyecto
            <br />
            <span className="gradient-text-white">empieza aquí</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-400 text-lg max-w-lg"
          >
            Contanos qué necesitas y nos ponemos en contacto en menos de 24 horas.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-black text-white mb-8">Envianos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nombre *"
                  aria-label="Nombre"
                  className={inputClass}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email *"
                    aria-label="Email"
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    aria-label="Teléfono"
                    className={inputClass}
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-label="Servicio de interés"
                  className={inputClass + ' [&>option]:bg-neutral-900 [&>option]:text-white'}
                >
                  <option value="">Servicio de interés</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="redes-sociales">Gestión de Redes Sociales</option>
                  <option value="branding">Branding y Diseño</option>
                  <option value="chatbot">Chatbot con IA</option>
                  <option value="google-mi-negocio">Google Mi Negocio</option>
                  <option value="fotografia">Fotografía</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Contanos tu proyecto... *"
                  aria-label="Mensaje"
                  className={inputClass + ' resize-none'}
                />

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>

                {submitted && (
                  <div className="p-4 bg-green-900/30 border border-green-500/30 rounded-xl">
                    <p className="text-green-400 font-semibold text-sm">
                      ✓ Mensaje enviado. Nos contactaremos pronto.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-black text-white mb-8">Información de contacto</h2>

              {contactItems.map(({ icon: Icon, label, key, href }) => {
                const value = CONTACT_INFO[key];
                return (
                  <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href(value)} className="text-neutral-200 text-sm hover:text-purple-300 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-neutral-200 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* WhatsApp */}
              <a
                href={`${SOCIAL_LINKS.whatsapp}?text=Hola%2C%20quiero%20hacer%20una%20consulta`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] font-semibold text-sm transition-all duration-200 mt-6"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L0 24l6.335-1.505A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.002-1.368l-.359-.214-3.721.884.94-3.63-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
                </svg>
                Escribinos por WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
