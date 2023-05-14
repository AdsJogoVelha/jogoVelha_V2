import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class db_usuarios extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public apelido: string

  @column()
  public email: string

  @column()
  public senha: string

  @column()
  public sub: string

  @column()
  public picture: string

  @column()
  public vitorias: string

  @column()
  public derrotas: string

  @column()
  public empates: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: db_usuarios) {
    if (user.$dirty.senha) {
      user.senha = await Hash.make(user.senha)
    }
  }

  //Teste de classe
  CriarJogador(nome, apelido, email, senha, sub, picture){
    console.log('Criando Jogador...')
    this.nome = nome
    this.apelido = apelido 
    this.email = email 
    this.senha = senha 
    this.sub = sub 
    this.picture = picture
    
    this.save()

  }



}
