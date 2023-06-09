import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Partida extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_usuario1: number

  @column()
  public id_usuario2: number

  @column()
  public id_partida: string

  @column()
  public id_vencedor: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

