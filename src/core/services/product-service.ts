import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const productService = {
  async findAll(_req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany()

      if (products.length === 0)
        return res.status(404).json({ message: 'Nenhum produto cadastrado' })

      return res.status(200).json(products)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Erro ao listar produtos' })
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
        return res
          .status(409)
          .json({ message: 'Produto já cadastrado com esse código de barras' })

      await prisma.product.create({
        data: {
          name,
          cod_barras,
          quantidade,
        },
      })

      return res.status(201).json({ message: 'Produto criado' })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Erro ao criar produto' })
    }
  },

  async addQuantidade(req: Request, res: Response) {
    const { cod_barras, quantidade } = req.body

    try {
      const product = await prisma.product.findUnique({
        where: {
          cod_barras,
        },
      })

      if (!product)
        return res.status(404).json({ message: 'Produto não encontrado' })

      await prisma.product.update({
        where: {
          cod_barras,
        },
        data: {
          quantidade: (product.quantidade += quantidade),
        },
      })

      return res
        .status(200)
        .json({ message: `Adicionado +${quantidade} para ${product.name}` })
    } catch (error) {
      console.log(error)
      return res
        .status(400)
        .json({ message: 'Erro ao adicionar quantidade ao produto' })
    }
  },

  async rmQuantidade(req: Request, res: Response) {
    const { cod_barras, quantidade } = req.body

    try {
      const product = await prisma.product.findUnique({
        where: {
          cod_barras,
        },
      })

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' })
      }

      if (quantidade > product.quantidade) {
        return res
          .status(400)
          .json({ message: 'Não é possivel remover essa quantidade' })
      }

      const newQuantidade = product.quantidade - quantidade

      await prisma.product.update({
        where: {
          cod_barras,
        },
        data: {
          quantidade: newQuantidade,
        },
      })

      return res
        .status(200)
        .json({ message: `Removido -${quantidade} de ${product.name}` })
    } catch (error) {
      console.log(error)
      return res
        .status(400)
        .json({ message: 'Erro ao remove quantidade do produto' })
    }
  },
}
