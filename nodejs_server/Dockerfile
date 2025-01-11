# Usar una imagen oficial de Node.js
FROM node:22

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

# Exponer el puerto en el que el servidor va a correr
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]




