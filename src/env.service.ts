import * as dotenv from 'dotenv'
import * as fs from 'fs'
import {EnvData} from './EnvData'

export class EnvService{
  
  private vars:EnvData

  
  constructor(){
    const enviroment = process.env.NODE_ENV || 'development'
    const data:any = dotenv.parse(fs.readFileSync(`${enviroment}.env`))
    this.vars = data as EnvData
  }
  read():EnvData{
    return this.vars
  }

  idDev():boolean{
    return (this.vars.APP_ENV === 'development')
  }
  idProd():boolean{
    return (this.vars.APP_ENV==='production')
  }

}