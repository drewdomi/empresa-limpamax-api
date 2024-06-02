import { z } from 'zod'

export const createProductSchema = z.object({
  body: z.object({
    name: z
      .string({
        message: 'Nome é obrigatório',
      })
      .min(3, 'Nome precisa ter no mínimo 3 caracteres')
      .max(60, 'Nome não pode exceder 60 caracteres'),
    cod_barras: z
      .string({
        message: 'Código de barras é obrigatório',
      })
      .min(5, 'O código de barras precisa ter no mínimo 5 caracteres')
      .max(60, 'O código de barras não pode ter mais de 60 caracteres'),
    quantidade: z
      .number()
      .int('A quantidade precisa ser inteiro')
      .positive('A quantidade não pode ser negativa')
      .optional(),
  }),
})
