import { test } from '@japa/runner'
import db_usuarios from 'App/Models/Usuario'

test('Cadastrando usuário', async ({ client,}) => {
  const usuario = await db_usuarios.all()
  console.log(usuario)
  
})
