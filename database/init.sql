CREATE TABLE contactos (
  id SERIAL PRIMARY KEY,
  uuid UUID NOT NULL,
  nombre VARCHAR(200) NOT NULL,
  correo VARCHAR(150) NOT NULL,
  telefono VARCHAR(15) NOT NULL
);