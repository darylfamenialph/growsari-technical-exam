import { Module } from '@nestjs/common';
import { UserFacadeService } from './user.facade.service';

@Module({
  providers: [UserFacadeService],
  exports: [UserFacadeService],
})
export class UserModule {}
