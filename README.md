# Nombre del Proyecto
diviXpress

# Integrantes
- Kevin Zapata  
- Carolina Zuluaga  
- Helen Guerra  

## Descripción
diviXpress es una aplicación web desarrollada en React que permite realizar conversiones de divisas en tiempo real de forma ágil y confiable.  
La app soporta las 10 monedas más utilizadas a nivel mundial, incluyendo el Peso Colombiano (COP), con información obtenida de una API de tasas de cambio actualizadas.

Con un diseño clásico pero moderno, ofrece:

- Conversión rápida y precisa entre monedas.  
- Consulta de tasas de cambio internacionales.  
- Historial de conversiones realizadas.  
- Interfaz intuitiva y responsiva, adaptable a dispositivos móviles, tablets y computadores.  

Una herramienta ideal para viajeros, estudiantes, comerciantes y cualquier persona que necesite convertir monedas de manera sencilla y veloz.

## Características
- Conversión en tiempo real de 10 monedas internacionales.  
- Historial de conversiones almacenadas para consulta.  
- Interfaz responsiva con diseño moderno.  
- Página de inicio de sesión con encriptación de credenciales.  
- API integrada para tasas de cambio actualizadas.  

### Tecnologías utilizadas
- **Frontend**: React + Next.js + TailwindCSS  
- **Backend**: Node.js / API propia  
- **Base de datos**: MongoDB (para historial de conversiones y usuarios)  
- **Control de versiones**: Git + GitHub  

---

## Registro de Avances por Clase
**Nota**: Todos los avances documentados en esta sección coinciden con los commits realizados en el repositorio, incluyendo el autor correspondiente de cada commit.  

---

### Clase 1
- **Fecha**: 15/09/2025  
- **Objetivos**:  
  - Definir la estructura inicial del proyecto.  
  - Crear las páginas principales (Exchange, About, History).  

- **Avances**:  
  - ✅ Estructura general del proyecto creada - Responsable: **Kevin Zapata** - Commit: *"estructura base con páginas Exchange, About y History"*  
- **En progreso**:  
  - 🔄 Diseño inicial en TailwindCSS - Responsable: **Carolina Zuluaga** - Commit: *"primeros estilos globales"*  
- **Pendiente**:  
  - ⏳ Configuración de la API de divisas - Responsable: **Helen Guerra**  

- **Notas**:  
  - Se decidió usar Next.js para manejar rutas y optimizar el despliegue.  

---

### Clase 2
- **Fecha**: 22/09/2025  
- **Objetivos**:  
  - Implementar página de Login con encriptación.  
  - Ajustar estilos globales y navegación.  

- **Avances**:  
  - ✅ Página de Login con encriptación (bcrypt) implementada - Responsable: **Carolina Zuluaga** - Commit: *"login page con encriptación y validaciones"*  
  - ✅ Navbar y estilos generales organizados - Responsable: **Carolina Zuluaga** - Commit: *"estilos globales y navbar estilizado"*  
- **En progreso**:  
  - 🔄 Integración de la API de divisas - Responsable: **Helen Guerra** - Commit: *"conexión inicial a la API de tasas de cambio"*  
- **Pendiente**:  
  - ⏳ Mostrar historial dinámico - Responsable: **Helen Guerra**  

- **Notas**:  
  - Se ajustó la paleta de colores y tipografías para dar un estilo clásico-moderno.  

---

### Clase 3
- **Fecha**: 29/09/2025  
- **Objetivos**:  
  - Conectar API de divisas al sistema de conversión.  
  - Implementar historial dinámico.  
  - Pulir detalles de UI/UX.  

- **Avances**:  
  - ✅ API de divisas configurada y consumida exitosamente - Responsable: **Helen Guerra** - Commit: *"integración completa de la API de divisas con conversiones en tiempo real"*  
  - ✅ Historial de conversiones funcionando con almacenamiento en MongoDB - Responsable: **Helen Guerra** - Commit: *"historial dinámico conectado a la base de datos"*  
  - ✅ Ajustes finales en el layout y footer - Responsable: **Kevin Zapata** - Commit: *"RootLayout estilizado con fondo y footer"*  

- **En progreso**:  
  - 🔄 Pruebas de UI en móviles - Responsable: **Carolina Zuluaga** - Commit: *"pruebas de responsividad en dispositivos móviles"*  
- **Pendiente**:  
  - ⏳ Deploy en Vercel - Responsable: **Kevin Zapata**  

- **Notas**:  
  - Se discutió la importancia de mantener el historial sincronizado con la sesión del usuario.  
  - Próximo paso: despliegue en Vercel.  

---

## Contacto
### Información del Grupo
- **Institución**: SENA  
- **Programa**: Análisis y Desarrollo de Software  
- **Ficha**: 3114227  
- **Instructor**: Jhon Fredy Valencia  
- **Período**: 2025-3 trimestre  
