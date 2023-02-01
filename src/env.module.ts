import {Module,Global} from '@nestjs/common'
import { EnvService } from './env.service'

@Global()
@Module({
  providers: [
    {
      provide:EnvService,
      useValue:new EnvService()
    }
  ]
})
export class EnvModule{
  
}