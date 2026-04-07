# Especificación Frontend - PetCare Veterinaria

## 🎨 Sistema de Diseño

### Paleta de Colores
| Rol | Color HEX | Uso |
|-----|-----------|-----|
| Primary | #4A90E2 | Botones principales, enlaces activos |
| Secondary | #50E3C2 | Acentos, badges, iconos |
| Background | #F8FAFC | Fondo general |
| Surface | #FFFFFF | Cards, modales, formularios |
| Text Primary | #1E293B | Títulos, cuerpo principal |
| Text Secondary | #64748B | Metadatos, placeholders |

### Tipografía
| Elemento | Familia | Tamaño | Peso | Line-height |
|----------|---------|--------|------|-------------|
| H1 Hero | Inter | 2.5rem (40px) | 700 | 1.2 |
| H2 Section | Inter | 1.875rem (30px) | 600 | 1.3 |
| Body | Inter | 1rem (16px) | 400 | 1.5 |
| Button | Inter | 1rem (16px) | 500 | 1 |

## 🧱 Componentes Identificados

### Navbar (home.png)
- Posición: fixed top, z-index: 50
- Elementos: Logo (izq), Links (centro), CTA "Agendar" (der)
- Responsive: mobile → hamburger menu, desktop → horizontal
- Estado activo: enlace con border-bottom: 2px solid primary

### Hero Section
- Layout: 2 columnas (desktop) / 1 columna (mobile)
- Contenido: Título, subtítulo, CTA principal, imagen ilustrativa
- CTA: Botón primario con hover: scale(1.02) + shadow-lg

### Services Grid
- Grid: 4 columnas (desktop) → 2 (tablet) → 1 (mobile)
- Card: border-radius: 12px, shadow: elevation-2, hover: elevation-4
- Icono: 48x48px, color: secondary, fondo: primary/10

### Login Widget (sidebar)
- Form: email + password + "Recordarme" + "¿Olvidaste tu contraseña?"
- Validación: realtime con mensajes de error accesibles (aria-live)
- Submit: botón con loading state