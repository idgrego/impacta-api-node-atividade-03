import { Module } from '@nestjs/common';
import { ArithmeticController } from './arithmetic.controller';
import { ArithmeticService } from './arithmetic.service';

@Module({
  imports: [],
  controllers: [ArithmeticController],
  providers: [ArithmeticService],
})
// eslint-disable-next-line prettier/prettier
export class ArithmeticModule { }
