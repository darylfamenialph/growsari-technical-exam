import { Injectable } from '@nestjs/common';
import { getDogFactsService } from './services/get-facts';

@Injectable()
export class DogFactsFacadeService {
  async getDogFacts() {
    return getDogFactsService();
  }
}
