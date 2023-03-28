import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LogJogada from 'App/Models/LogJogada'

export default class JogadasController {
  public async index({}: HttpContextContract) {}

  public async posicao({auth,request}: HttpContextContract) {
    try{
      if(await auth.use('api').authenticate()){
        var post = request.only(['id_usuario', 'id_partida','posicao'])
        post.id_usuario = await auth.use('api').user?.apelido

        await LogJogada.create(post)

        return {
          message: "jogada registrada com sucesso!"
        }

      }

    }catch(err){
      return err
    }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
