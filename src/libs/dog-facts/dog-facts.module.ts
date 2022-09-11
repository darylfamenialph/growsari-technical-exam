import { Module } from '@nestjs/common';
import { DogFactsFacadeService } from './dog-facts.facade.service';

@Module({
  providers: [DogFactsFacadeService],
  exports: [DogFactsFacadeService],
})
export class DogFactsModule {}
