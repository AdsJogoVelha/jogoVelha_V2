import { test } from '@japa/runner'
import db_usuarios from 'App/Models/Usuario'

  //Testando a conexão com o banco de dados
  test('Banco de Dados', async ({ client,}) => {
    const usuario = await db_usuarios.all()
    
  })
