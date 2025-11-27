## API MAIL

### 🐋 Levantar proyecto con Docker


> [!NOTE] 
> Duplicar el archivo .env.template y nombrarlo como .env.
> Luego completar sus variables de entorno. Se recomienda
> utilizar el puerto 4000 para el puerto de express.

#### Comando para levantar

```bash
docker compose up -d
```

#### Comando para levantar luego de realizar un cambio

```bash
docker compose up -d --build
```