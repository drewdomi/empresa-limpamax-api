import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const productService = {
  async findAll(req: Request, res: Response) {
    try {
      const products = prisma.product.findMany()

      return res.status(200).json(products)
    } catch (error) {
      return res.status(400).json({ message: 'Error on find all products' })
    }
  },
  async create(req: Request, res: Response) {
    const { name, cod_barras, quantidade } = req.body
    try {
      const codBarrasRegistered = await prisma.product.findUnique({
        where: {
          cod_barras,
        },
      })

      if (codBarrasRegistered)
        return res.status(409).json({ message: 'Product already registered' })

      await prisma.product.create({
        data: {
          name,
          cod_barras,
          quantidade,
        },
      })

      return res.status(201).json({ message: 'Product created' })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Error on creating product' })
    }
  },
}
