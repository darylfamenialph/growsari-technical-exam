import { Module } from '@nestjs/common';
import { UserFacadeController } from './user.facade.controller';
import { UserFacadeService } from './user.facade.service';

@Module({
  providers: [UserFacadeService],
  exports: [UserFacadeService],
  controllers: [UserFacadeController],
})
export class UserModule {}
