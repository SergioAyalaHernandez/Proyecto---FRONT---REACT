# Usa la imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en la carpeta de la aplicación
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación a la imagen
COPY . .

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Ejecuta el comando npm start al iniciar el contenedor
CMD ["npm", "start"]

