import twilio from 'twilio'

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

export const enviarSMS = async ({ to, message }) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to,
    })

    console.log('SMS enviado:', response.sid)
    return response
  } catch (error) {
    console.error('Error enviando SMS:', error)
    throw error
  }
}
