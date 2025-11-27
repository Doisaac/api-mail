import fetch from 'node-fetch'

export const getServerIp = async () => {
  try {
    const res = await fetch('https://api.ipify.org?format=json')
    const data = await res.json()
    return data.ip
  } catch (error) {
    console.error('Error obteniendo IP del servidor:', error)
    return 'IP_NO_DETECTADA'
  }
}
