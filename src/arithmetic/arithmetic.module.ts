import { Module } from '@nestjs/common';
import { ArithmeticController } from './v1/arithmetic.controller';
import { ArithmeticService } from './arithmetic.service';
import { ArithmeticV2Controller } from './v2/arithmetic.v2.controller';

@Module({
  imports: [],
  controllers: [ArithmeticController, ArithmeticV2Controller],
  providers: [ArithmeticService],
})
// eslint-disable-next-line prettier/prettier
export class ArithmeticModule { }
