import { Module } from '@nestjs/common';
import { DogFactsFacadeController } from './dog-facts.facade.controller';
import { DogFactsFacadeService } from './dog-facts.facade.service';

@Module({
  providers: [DogFactsFacadeService],
  exports: [DogFactsFacadeService],
  controllers: [DogFactsFacadeController],
})
export class DogFactsModule {}
