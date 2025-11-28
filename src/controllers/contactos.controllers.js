import { saveContact } from '../services/contact.services.js'
import { enviarCorreoSES } from '../services/ses.service.js'
import { enviarSMS } from '../services/twilio.service.js'
import { getServerIp } from '../utils/getServerIp.js'

export const guardarContactoController = async (req, res) => {
  try {
    const { contacto } = req.body

    if (!contacto) {
      return res.status(400).json({ error: 'El objeto contacto es requerido' })
    }

    const { uuid, nombre, correo, telefono } = contacto

    const requiredFields = { uuid, nombre, correo, telefono }

    // Validación
    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({
          error: `Falta el campo requerido: ${key}`,
        })
      }
    }

    // Guardar en la BD
    const saved = await saveContact({ uuid, nombre, correo, telefono })

    // Obtener la IP real del servidor
    const serverIp = await getServerIp()

    // Construir contenido del correo
    const mensaje = `
Hola ${nombre},
Tu contacto fue registrado correctamente.

UUID: ${uuid}
Nombre: ${nombre}
IP del servidor: ${serverIp}
    `

    // Enviar correo
    await enviarCorreoSES({
      to: correo,
      subject: 'Notificación de registro',
      text: mensaje,
    })

    // Enviar SMS
    await enviarSMS({
      to: telefono,
      message: mensaje,
    })

    return res.status(201).json({
      message: 'Contacto guardado correctamente',
      data: saved,
    })
  } catch (error) {
    console.error('Error al guardar contacto:', error)
    return res.status(500).json({ error: 'Error interno del servidor' })
  }
}
