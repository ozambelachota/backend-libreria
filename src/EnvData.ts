export interface EnvData {
  APP_ENV:string
  APP_DEBUG:boolean

  BD_TYPE: 'mysql' | 'mariadb'
  DB_HOST:string
  DB_NAME:string
  DB_PORT:number
  DB_USER:string
  DB_PASSWORD:string
}