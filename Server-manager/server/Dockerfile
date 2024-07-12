# Usa una imagen base oficial de Node.js
FROM node:22

# Crea y establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expon el puerto en el que la app escuchará
EXPOSE 3000

# Ejecuta la aplicación
CMD [ "node", "src/app.js" ]
