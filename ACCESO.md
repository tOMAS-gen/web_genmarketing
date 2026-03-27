# 🌐 Acceso al Sitio Web >genmarketing

## ✅ El sitio está EN VIVO y funcionando

### 🖥️ URL de Acceso

**Local (esta máquina):**
```
http://localhost:3010
```

**En red (desde otra máquina):**
```
http://192.168.1.42:3010
```

---

## 📍 Páginas Disponibles

### 🏠 Página Principal
- **URL:** http://localhost:3010
- **Contenido:** Landing completa con todos los servicios

### 🔧 Servicios
- **URL:** http://localhost:3010/servicios
- **Sub-páginas:**
  - `/servicios/desarrollo-web`
  - `/servicios/redes-sociales`
  - `/servicios/branding`
  - `/servicios/chatbot`
  - `/servicios/google-mi-negocio`
  - `/servicios/fotografia`

### 🎨 Portfolio
- **URL:** http://localhost:3010/portfolio
- **Ejemplo de caso:** http://localhost:3010/portfolio/estudio-diseno

### 📝 Blog
- **URL:** http://localhost:3010/blog
- **Artículos disponibles:**
  - `/blog/tips-instagram`
  - `/blog/seo-guia-completa`
  - `/blog/branding-identidad-visual`

### 💬 Contacto
- **URL:** http://localhost:3010/contacto
- **Características:** Formulario funcional con validación

### 💰 Presupuesto
- **URL:** http://localhost:3010/presupuesto
- **Características:** Formulario extendido con múltiples campos

### ⚖️ Páginas Legales
- **Política de Privacidad:** http://localhost:3010/politica-privacidad
- **Términos y Condiciones:** http://localhost:3010/terminos

---

## 🎯 Qué Verificar

### Diseño & Layout
- [ ] Header sticky en la parte superior
- [ ] Logo ›genmarketing con colores correctos
- [ ] Menú responsive (hamburguesa en mobile)
- [ ] Footer con información de contacto

### Secciones (Home)
- [ ] Hero section con título y CTAs
- [ ] Grid de 6 servicios
- [ ] Tabla de 3 planes
- [ ] Sección "Sobre Nosotros" con valores
- [ ] Testimonios de clientes
- [ ] Call-to-action final

### Formularios
- [ ] Formulario de contacto funcional
- [ ] Formulario de presupuesto funcional
- [ ] Validación de campos
- [ ] Mensaje de éxito después de enviar

### Navegación
- [ ] Links internos funcionan
- [ ] Página 404 personalizada para rutas inválidas
- [ ] Menú móvil se abre/cierra correctamente

### Responsive
- [ ] Prueba en mobile (< 640px)
- [ ] Prueba en tablet (640px - 1024px)
- [ ] Prueba en desktop (> 1024px)

---

## 🛠️ Controles de Desarrollo

### Abrir DevTools
- **Chrome/Edge:** Presiona `F12` o `Ctrl+Shift+I`
- **Firefox:** Presiona `F12` o `Ctrl+Shift+I`
- **Safari:** `Cmd+Option+I`

### Verificar Responsive
1. Abre DevTools
2. Click en el ícono de dispositivo (esquina superior izquierda)
3. Selecciona diferentes tamaños de pantalla

### Ver Consola
- Abre DevTools → Tab "Console"
- Debe estar limpia (sin errores importantes)

---

## 🔍 Pruebas Sugeridas

### 1. Navegación Principal
- Haz click en cada link del header
- Verifica que cada página carga correctamente

### 2. Formularios
- Rellena el formulario de contacto
- Intenta enviar sin rellenar campos (debe mostrar error)
- Prueba con datos válidos
- Deberías ver un mensaje de confirmación

### 3. Links Internos
- Haz click en "Ver Servicios" en Hero
- Haz click en "Ver Detalle" en cada servicio
- Haz click en casos de portfolio
- Haz click en artículos del blog

### 4. Responsividad
- Redimensiona la ventana
- Prueba en diferentes dispositivos (si es posible)
- Verifica que el menú hamburguesa aparece en mobile

### 5. SEO
- Haz click derecho → "Ver código fuente"
- Busca `<title>` (debe tener nombre de página)
- Busca `<meta name="description"` (debe tener descripción)

---

## 🔧 Comando para Iniciar Servidor

Si necesitas reiniciar el servidor:

```bash
cd /Users/tomi/Documents/genmarketing/web_genmarketing
PORT=3010 npm run dev
```

El servidor debería responder con:
```
✓ Ready in XXXms
- Local:   http://localhost:3010
- Network: http://192.168.1.42:3010
```

---

## ✨ Características Especiales

### Header Sticky
- Se queda fijo en la parte superior al hacer scroll

### Animaciones
- Transiciones suaves al cambiar de página
- Hover effects en botones y cards

### Formularios
- Validación en tiempo real
- Mensajes de error claros
- Confirmación de envío

### Responsive Design
- Mobile-first approach
- Breakpoints en 640px, 768px, 1024px, 1280px

---

## 📊 Información Técnica

- **Framework:** Next.js 14
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **Servidor:** Turbopack (fast refresh)
- **Build size:** ~11MB

---

## 🐛 Si Algo No Funciona

1. **Recarga la página:** `Ctrl+R` o `Cmd+R`
2. **Limpia caché:** `Ctrl+Shift+R` (hard refresh)
3. **Abre DevTools y revisa la consola** por errores
4. **Verifica que el servidor está corriendo:** http://localhost:3010
5. **Si nada funciona, reinicia el servidor**

---

## 📈 Próximos Pasos

1. **Agregar contenido real:** Reemplazar datos mock
2. **Subir imágenes profesionales** en `/public/images`
3. **Conectar servicio de email** para formularios
4. **Configurar Google Analytics**
5. **Deploy a producción** en Vercel

---

**¡Disfruta explorando el sitio!** 🎉
