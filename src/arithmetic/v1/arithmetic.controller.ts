import {
  Controller,
  Get,
  ParseFloatPipe,
  Query,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ArithmeticService } from '../arithmetic.service';

@Controller({
  path: 'arithmetic',
  version: ['1', VERSION_NEUTRAL],
})
export class ArithmeticController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly service: ArithmeticService) { }

  @Get('sum')
  sum(
    @Query('a', ParseFloatPipe) a: number,
    @Query('b', ParseFloatPipe) b: number,
  ): number {
    return this.service.sum(a, b);
  }

  @Get('subtraction')
  subtraction(
    @Query('a', ParseFloatPipe) a: number,
    @Query('b', ParseFloatPipe) b: number,
  ): number {
    return this.service.subtraction(a, b);
  }

  @Get('multiplication')
  multiplication(
    @Query('a', ParseFloatPipe) a: number,
    @Query('b', ParseFloatPipe) b: number,
  ): number {
    return this.service.multiplication(a, b);
  }

  @Get('division')
  division(
    @Query('a', ParseFloatPipe) a: number,
    @Query('b', ParseFloatPipe) b: number,
  ): number {
    return this.service.division(a, b);
  }
}
