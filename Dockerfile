# SO
FROM node:lts-buster

# Trabajar en carpeta /app/
WORKDIR /app

# Instalar PNPM
RUN npm install -g pnpm@latest-10

# Copiar archivos de dependencias para aprovechar caché
COPY package.json pnpm-lock.yaml* ./

# Instalar las dependencias
RUN pnpm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de la app
EXPOSE ${PORT}

# Ejecutar la aplicación
ENTRYPOINT ["pnpm", "run", "start"]