import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export class AuthControler {
  static async login(req: Request, res: Response) {
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

      if (!user) return res.status(404).json({ message: 'User not found' })

      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid)
        return res.status(404).json({ message: 'User not found' })

      const resUser = {
        name: user.name,
        email: user.email,
      }

      return res.send(resUser)
    } catch (error) {
      return res.status(400).json({ message: 'Error on login process' })
    }
  }
}
