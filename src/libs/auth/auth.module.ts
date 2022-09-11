import { Module } from '@nestjs/common';
import { AuthFacadeService } from './auth.facade.service';

@Module({
  providers: [AuthFacadeService],
  exports: [AuthFacadeService],
})
export class AuthModule {}
