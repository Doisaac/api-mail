import { pool } from '../db.js'

export const saveContact = async ({ uuid, nombre, correo, telefono }) => {
  const query = `
    INSERT INTO contactos (uuid, nombre, correo, telefono)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `
  const values = [uuid, nombre, correo, telefono]

  const { rows } = await pool.query(query, values)
  return rows[0]
}
