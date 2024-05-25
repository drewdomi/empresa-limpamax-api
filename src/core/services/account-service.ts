import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const accountService = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          name: true,
          email: true,
          password: true,
        },
      })

      if (!user)
        return res.status(401).json({ message: 'Email or password invalid' })

      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid)
        return res.status(401).json({ message: 'Email or password invalid' })

      const resUser = {
        name: user.name,
        email: user.email,
      }

      return res.send(resUser)
    } catch (error) {
      return res.status(400).json({ message: 'Error on login process' })
    }
  },

  async register(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const isEmailAlreadyRegistered = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (isEmailAlreadyRegistered)
        return res.status(409).json({ message: 'Email already registered' })

      const salt = await bcrypt.genSalt(12)
      const hashedPassword = await bcrypt.hash(password, salt)

      await prisma.user.create({
        data: {
          name: '',
          email,
          password: hashedPassword,
        },
      })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Error on register process' })
    }
  },
}
