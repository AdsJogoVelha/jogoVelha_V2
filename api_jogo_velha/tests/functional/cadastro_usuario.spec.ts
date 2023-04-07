import { test } from '@japa/runner'
import db_usuarios from 'App/Models/Usuario'

test.group('Cadastro_usuario', () => {
  // Write your test here
  //Testando a aplicação
  test('Aplicação', async ({ client,  }) => {
    const response = await client.get('/')
  
    response.assertStatus(200)
    
  })

  //Testando a conexão com o banco de dados
  test('Banco de Dados', async ({ client,}) => {
    const usuario = await db_usuarios.all()
    
  })
})
