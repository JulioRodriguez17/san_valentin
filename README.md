# 💝 San Valentín - Página de Propuesta Interactiva

Una página web romántica e interactiva para hacer tu propuesta de San Valentín con efectos especiales, animaciones de corazones y botones con comportamientos únicos.

## ✨ Características

- 💕 **Lluvia de corazones animados** - Corazones cayendo con movimiento aleatorio en el fondo
- 🌍 **Traducciones multilingües** - El botón "Sí" cambia de idioma al hacer hover (8 idiomas)
- 🧲 **Efecto de repulsión magnética** - El botón "No" se aleja del cursor como un imán
- 🎨 **Diseño glassmorphism** - Tarjeta con efecto de cristal esmerilado y blur
- 🎭 **Estado de aceptación** - Mensaje especial cuando se acepta la propuesta
- 📱 **Diseño responsive** - Se adapta perfectamente a cualquier dispositivo
- 🎯 **Sistema de tokens de diseño** - Variables CSS organizadas para fácil personalización


## 📦 Instalación

```bash
# Clonar el repositorio
git clone github.com-personal:JulioRodriguez17/san_valentin.git
cd san_valentin

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 🎨 Personalización

### Cambiar Colores

Edita las variables en `src/styles/tokens.css`:

```css
:root {
  --color-accent: 255 77 122;        /* Rosa principal */
  --color-accent-soft: 255 143 176;  /* Rosa suave */
  --color-bg: 11 11 15;              /* Fondo oscuro */
}
```

### Modificar Traducciones

Edita el array en `src/constants/valentine.ts`:

```typescript
export const TRANSLATIONS = [
  'Yes! ❤️',           // Inglés
  'Sí! ❤️',            // Español
  'Oui! ❤️',           // Francés
  // ... añade más idiomas
];
```

### Ajustar Animación de Corazones

Modifica las constantes en `src/constants/valentine.ts`:

```typescript
export const HEARTS_COUNT = 20;           // Cantidad de corazones
export const HEART_MIN_SIZE = 12;         // Tamaño mínimo
export const HEART_MAX_SIZE = 24;         // Tamaño máximo
export const HEART_MIN_ANIMATION_DURATION = 8;   // Duración mínima
export const HEART_MAX_ANIMATION_DURATION = 15;  // Duración máxima
```



## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Julio Rodriguez**
- GitHub: [@JulioRodriguez17](https://github.com/JulioRodriguez17)
- Email: julrodrie.117@gmail.com

---

💝 Hecho con amor para San Valentín 2026
