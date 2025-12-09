import { Controller, Post, Body } from '@nestjs/common';
import { ArithmeticService } from '../arithmetic.service';
import { OperationRequest } from './operation-request.model';

@Controller({
  path: 'arithmetic',
  version: ['2'],
})
export class ArithmeticV2Controller {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly service: ArithmeticService) { }

  @Post('sum')
  sum(@Body() data: OperationRequest): number {
    return this.service.sum(data.a, data.b);
  }

  @Post('subtraction')
  subtraction(@Body() data: OperationRequest): number {
    return this.service.subtraction(data.a, data.b);
  }

  @Post('multiplication')
  multiplication(@Body() data: OperationRequest): number {
    return this.service.multiplication(data.a, data.b);
  }

  @Post('division')
  division(@Body() data: OperationRequest): number {
    return this.service.division(data.a, data.b);
  }
}
