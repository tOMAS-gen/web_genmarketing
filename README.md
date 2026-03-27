# web_genmarketing

Sitio web profesional para la agencia digital **>genmarketing**, construido con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **UI Icons**: Lucide React
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Deploy**: Vercel (recomendado)

## 📁 Estructura del Proyecto

```
src/
├── app/                          # Rutas de Next.js (App Router)
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página principal (/)
│   ├── globals.css              # Estilos globales
│   ├── sitemap.ts               # Sitemap dinámico
│   ├── not-found.tsx            # Página 404 personalizada
│   ├── servicios/
│   │   ├── page.tsx             # Listado de servicios
│   │   └── [slug]/              # Página dinámica de servicio
│   ├── portfolio/
│   │   ├── page.tsx             # Galería de proyectos
│   │   └── [slug]/              # Detalle de proyecto
│   ├── blog/
│   │   ├── page.tsx             # Listado de artículos
│   │   └── [slug]/              # Artículo individual
│   ├── contacto/
│   │   └── page.tsx             # Formulario de contacto
│   ├── presupuesto/
│   │   └── page.tsx             # Solicitud de presupuesto
│   ├── politica-privacidad/
│   │   └── page.tsx             # Política de privacidad
│   └── terminos/
│       └── page.tsx             # Términos y condiciones
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navegación superior
│   │   ├── Footer.tsx           # Pie de página
│   │   └── MobileMenu.tsx       # Menú móvil
│   ├── ui/
│   │   ├── Button.tsx           # Botón reutilizable
│   │   ├── Card.tsx             # Card de contenido
│   │   ├── Badge.tsx            # Etiqueta/label
│   │   └── SectionTitle.tsx     # Título de sección
│   └── sections/
│       ├── Hero.tsx             # Sección hero
│       ├── Servicios.tsx        # Grid de servicios
│       ├── Planes.tsx           # Tabla de precios
│       ├── SobreNosotros.tsx    # About section
│       ├── Testimonios.tsx      # Testimonios de clientes
│       └── CTA.tsx              # Call to action
├── lib/
│   ├── constants.ts             # Datos estáticos (servicios, planes, etc)
│   ├── seo.ts                   # Configuración de metadata
│   └── utils.ts                 # Funciones auxiliares
├── types/
│   └── index.ts                 # Tipos TypeScript
└── public/
    ├── images/                  # Imágenes del sitio
    ├── favicon.ico              # Favicon
    └── robots.txt               # Configuración de robots

tailwind.config.ts              # Configuración de Tailwind
next.config.mjs                 # Configuración de Next.js
tsconfig.json                   # Configuración de TypeScript
.env.local                      # Variables de entorno
```

## 🎨 Identidad Visual

- **Logo**: `›genmarketing` (›gen en morado, marketing en negro)
- **Color Principal**: Morado (`#9333ea`)
- **Tipografía**: Montserrat (Google Fonts)
- **Estilo**: Moderno, minimalista, inspirado en Tailwind.com

## 🔧 Instalación y Desarrollo

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
cd web_genmarketing
npm install
```

### Desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
npm run lint:fix
```

### TypeScript Check
```bash
npm run typecheck
```

## 📝 Características

- ✅ Landing page completa con múltiples secciones
- ✅ 6 páginas de servicios detalladas
- ✅ Portfolio con casos de estudio
- ✅ Blog con artículos (MDX)
- ✅ Formularios de contacto y presupuesto con validación
- ✅ SEO optimizado (metadata, sitemap, robots.txt)
- ✅ Responsive design (mobile-first)
- ✅ Página 404 personalizada
- ✅ Páginas legales (Política de Privacidad, Términos)

## 🚀 Deploy

El proyecto está configurado para desplegarse fácilmente en **Vercel**:

1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno en Vercel
3. Deploy automático con cada push a main

**Comando manual**:
```bash
npm run preview  # Build y start local
```

## 🔐 Variables de Entorno

Crear archivo `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://genmarketing.com.ar

# Analytics (opcional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Configuration (opcional)
# EMAIL_API_KEY=xxx
```

## 📱 Responsive Design

- Mobile First approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Todas las páginas optimizadas para dispositivos móviles

## 📊 SEO

- Metadata dinámico por página
- Sitemap.xml generado automáticamente
- robots.txt configurado
- Open Graph images
- Schema markup (básico)

## 🎯 Próximos Pasos

1. **Contenido Real**: Reemplazar datos mock con información real
2. **Imágenes**: Agregar imágenes profesionales en `/public/images`
3. **Email**: Conectar servicio de email (Resend, Brevo, etc)
4. **Analytics**: Configurar Google Analytics
5. **Blog CMS**: Integrar CMS para gestión de artículos
6. **Testing**: Agregar tests automatizados

## 📄 Licencia

Este proyecto es propietario de >genmarketing.

## 📞 Soporte

Para preguntas o soporte: info@genmarketing.com.ar
