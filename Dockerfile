# Stage 1: Construir la aplicación React
FROM node:14 as build

WORKDIR /app

# Copiar el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación React
RUN npm run build

# Stage 2: Servir la aplicación construida con Nginx
FROM nginx:latest

# Copiar los archivos construidos del Stage 1 al directorio de trabajo de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Remplazar la configuración predeterminada de Nginx para exponer el puerto 80
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Comando para iniciar el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]
