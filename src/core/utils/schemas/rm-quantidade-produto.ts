import { z } from 'zod'

export const rmQuantidadeProduto = z.object({
  body: z.object({
    cod_barras: z
      .string({
        message: 'Código de barras é obrigatório',
      })
      .min(5, 'O código de barras precisa ter no mínimo 5 caracteres')
      .max(60, 'O código de barras não pode ter mais de 60 caracteres'),
    quantidade: z
      .number()
      .int('A quantidade precisa ser inteiro')
      .positive('A quantidade não pode ser negativa ou zerada'),
  }),
})
