import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partida from 'App/Models/Partida'

export default class PartidasController {

  //#region criando a partida
  public async index({auth, request, }: HttpContextContract) {
    try{
      if(await auth.use('api').authenticate()){
        var post = request.only(['id_usuario', 'id_partida','posicao'])
        post.id_usuario = await auth.use('api').user?.apelido

        await Partida.create(post)

        return {
          message: "jogada registrada com sucesso!"
        }

      }

    }catch(err){
      return err
    }
  }
  //#endregion

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}


}
