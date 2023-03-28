import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import db_usuarios from 'App/Models/Usuario'
import Usuario from 'App/Models/Usuario'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsuariosController {
  
  public async autenticacao({request, auth, response}: HttpContextContract) {
    const usuario2 = request.input('email')
    const senha = request.input('senha')
    //const post = request.only(['usuario', 'senha'])

    // Lookup user manually
    const usuario = await Usuario
    .query()
    .where('apelido', usuario2)
    .firstOrFail()

      const id = usuario.id
   // Verify password
   if (!(await Hash.verify(usuario.senha, senha))) {
    return response.unauthorized('Invalid credentials')
  }

  // Generate token
  try{
    const token = await auth.use('api').generate(usuario, {
      expiresIn: '30 mins'
    })

    return token

  }catch(err){
    console.log(err)
    return err
  }




  }

  //#region Cadastrando o usuario
  public async cadastro_usuario({request}: HttpContextContract) {
    const post = request.only(['nome','apelido','email','senha'])

    const select = await db_usuarios.findBy('apelido',post.apelido)
    console.log(select)

    if(select){
      console.log(select?.apelido)
      return {
        Atencao: "Usuário já cadastrado no sistema"
      }
    }

    await Usuario.create(post)

    return {
      message: "Usuário cadastrado com sucesso"
    }

  }
//#endregion
  

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}


}
