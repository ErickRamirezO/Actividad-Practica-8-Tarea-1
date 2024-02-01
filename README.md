# Chat App with Supabase

Este es un ejemplo de una aplicación de chat simple utilizando Supabase como backend.

## Descripción

Esta aplicación de chat permite a los usuarios enviar mensajes en tiempo real. Utiliza Supabase como backend para almacenar los mensajes y proporciona una interfaz de usuario simple para enviar y recibir mensajes.

## Funcionalidades

- ❌ Registro de usuarios utilizando autenticación OAuth con proveedores como GitHub, Google, Facebook, etc.
- ✅ Envío y recepción de mensajes en tiempo real.
- ✅ Almacenamiento persistente de mensajes utilizando la base de datos de Supabase.
- ✅ Interfaz de usuario simple y minimalista.

## Cómo replicar la aplicación

Sigue estos pasos para replicar la aplicación en tu propio entorno:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/statick88/chat
```

2. Instala las dependencias del proyecto utilizando npm o yarn:

```bash
npm i
```
o

```bash
yarn install
```

3. Crea una cuenta en Supabase [https://supabase.com](https://supabase.com) y configura un nuevo proyecto.
4. Configura la autenticación OAuth en Supabase para permitir el inicio de sesión con proveedores como GitHub, Google, Facebook, etc (Opcional).
5. Configura una nueva base de datos en Supabase para almacenar los mensajes del chat.

```sql
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    content TEXT,
    sender_id UUID REFERENCES auth.users (id) ON DELETE SET NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

6. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

VITE_SUPABASE_URL=`URL_de_tu_proyecto_de_Supabase`
VITE_SUPABASE_ANON_KEY=`Clave_anónima_de_tu_proyecto_de_Supabase`

7. Ejecuta la aplicación localmente:

```bash
npm run dev
```
o

```bash
yarn dev
```

8. Abre tu navegador y ve a `http://localhost:<port>` para ver la aplicación en funcionamiento.

## Mejoras futuras

Algunas mejoras que se pueden implementar en esta aplicación incluyen:

- Implementar funcionalidades de edición y eliminación de mensajes.
- Agregar funcionalidades de búsqueda y filtrado de mensajes.
- Mejorar el diseño y la experiencia de usuario de la interfaz de chat.
- Implementar notificaciones en tiempo real para nuevos mensajes.
- Integrar funcionalidades adicionales de autenticación y autorización.
- Internacionalización y localización para admitir múltiples idiomas.
- Implementar pruebas unitarias y de integración.
- Agregar la funcionalidad de cambio de tema claro y oscuro con tailwindcss.
