import { Module } from '@nestjs/common';
import { ArithmeticController } from './arithmetic.controller';
import { ArithmeticService } from './arithmetic.service';
import { ArithmeticV2Controller } from './arithmetic.v2.controller';

@Module({
  imports: [],
  controllers: [ArithmeticController, ArithmeticV2Controller],
  providers: [ArithmeticService],
})
// eslint-disable-next-line prettier/prettier
export class ArithmeticModule { }
