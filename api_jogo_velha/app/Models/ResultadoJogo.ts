import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ResultadoJogo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_partida: number

  @column()
  public id_usuario: number

  @column()
  public status_jogo: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
