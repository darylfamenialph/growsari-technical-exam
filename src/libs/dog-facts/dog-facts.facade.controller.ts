import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { DogFactsFacadeService } from './dog-facts.facade.service';

@Controller('/api/dog-facts')
export class DogFactsFacadeController {
  constructor(private readonly _dogFactsFacadeService: DogFactsFacadeService) {}

  @Get()
  async getDogFacts(@Res() res: Response) {
    try {
      const dogFact = await this._dogFactsFacadeService.getDogFacts();

      res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: dogFact,
        timestamp: new Date(),
      });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
        timestamp: new Date(),
      });
    }
  }
}
