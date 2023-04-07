import { test } from '@japa/runner'
import db_usuarios from 'App/Models/Usuario'

test('Cadastrando usuário', async ({ client,}) => {
  const usuario = {
    nome: "Marshall Bruce Mathers III",
    apelido: "Eminem",
    email: "eminem@gmail.com",
    senha: "$argon2id$v=19$t=3,m=4096,p=1$/tMJr16oHVrrBM4+05n55A$7c40DcbMdnu2JmMuMPF8dLveKxBBVH9DL8hVACCk7HA"

  }

  await db_usuarios.create(usuario)
  
})
