# 🎮 Piedra, Papel o Tijera - Multijugador Online

Juego clásico de Piedra, Papel o Tijera con dos modos de juego: contra la computadora o multijugador online en tiempo real.

## 🚀 Demo en Vivo

**[🎮 JUGAR AHORA](https://desafio-ppt.vercel.app)**

## 📸 Capturas

- **Modo de Selección:** Elige entre jugar contra la IA o con otra persona
- **Multijugador:** Crea una sala o únete con un código
- **Juego en Tiempo Real:** Las jugadas se sincronizan instantáneamente
- **Historial de Victorias:** Los scores se guardan permanentemente

## ✨ Características

- ✅ **Modo Local:** Juega contra la computadora con IA
- ✅ **Modo Multijugador:** Juega con otra persona en tiempo real
- ✅ **Sincronización en Tiempo Real:** Firebase Realtime Database
- ✅ **Persistencia de Datos:** Scores guardados en Firestore
- ✅ **Sistema de Rooms:** Crea salas con IDs únicos
- ✅ **Contador Regresivo:** Animación de 3 segundos antes del resultado
- ✅ **Responsive Design:** Funciona en móviles y desktop
- ✅ **SPA con Router:** Navegación sin recargas

## 🛠️ Tecnologías Utilizadas

### Frontend

- **TypeScript** - Tipado estático
- **Parcel** - Bundler rápido y sin configuración
- **Firebase SDK** - Cliente de Firebase para tiempo real
- **Custom Router** - Sistema de rutas propio
- **State Management** - Gestión centralizada del estado

### Backend

- **Node.js** + **Express** - API REST
- **TypeScript** - Desarrollo type-safe
- **Firebase Admin SDK** - Acceso a Firebase desde servidor
- **Firebase Realtime Database** - Sincronización de partidas
- **Firestore** - Almacenamiento de scores permanentes

### Deploy

- **Frontend:** Vercel
- **Backend:** Railway

## 🎮 Cómo Jugar

### Modo Local (Vs Computadora)

1. Haz click en "Vs Computadora"
2. Elige piedra, papel o tijera
3. Ve el resultado contra la IA
4. Tu puntuación se guarda en localStorage

### Modo Multijugador

1. Haz click en "Multijugador"
2. **Jugador 1:** Crea una sala e ingresa tu nombre
3. Comparte el ID de la sala con otra persona
4. **Jugador 2:** Únete con el ID y tu nombre
5. Ambos eligen su jugada
6. ¡Ven el resultado al mismo tiempo!
7. La puntuación se guarda en Firestore

## 📚 Documentación del Backend

**Repositorio Backend:** [desafio-ppt-backend](https://github.com/JulDevExo/desafio-ppt-backend)

**API Endpoints:**

- `POST /api/rooms` - Crear nueva sala
- `POST /api/rooms/:roomId/join` - Unirse a sala
- `POST /api/rooms/:roomId/play` - Hacer jugada
- `GET /api/rooms/:roomId/game` - Obtener estado del juego
- `POST /api/rooms/:roomId/finish` - Finalizar partida
- `GET /api/rooms/:roomId/score` - Obtener puntuación

**[📖 Documentación completa en Postman](https://documenter.getpostman.com/view/40679903/2sB3WyLH4k)**

## 📁 Estructura del Proyecto
