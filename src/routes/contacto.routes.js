import { Router } from 'express'
import { guardarContactoController } from '../controllers/contactos.controllers.js'

const appRouter = Router()

appRouter.post('/', guardarContactoController)

export default appRouter
