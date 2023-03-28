import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class LogJogada extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_usuario: string

  @column()
  public id_partida: string

  @column()
  public posicao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
