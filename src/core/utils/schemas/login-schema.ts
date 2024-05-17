import { z } from 'zod'

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({
        message: 'Email or password invalid',
      })
      .email('Email or password invalid'),
    password: z
      .string({
        message: 'Email or password invalid',
      })
      .min(8, 'Email or password invalid')
      .trim()
      .refine(s => s.includes(' '), 'Email or password invalid'),
  }),
})
