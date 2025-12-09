import { Test, TestingModule } from '@nestjs/testing';
import { ArithmeticController } from './arithmetic.controller';
import { ArithmeticService } from '../arithmetic.service';

describe('ArithmeticController', () => {
  let arithmeticController: ArithmeticController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArithmeticController],
      providers: [ArithmeticService],
    }).compile();

    arithmeticController = app.get<ArithmeticController>(ArithmeticController);
  });

  describe('operations', () => {
    it('should return the sum of 10 + 5', () => {
      expect(arithmeticController.sum(10, 5)).toBe(15);
    });
    it('should return the subtraction of 10 - 5', () => {
      expect(arithmeticController.subtraction(10, 5)).toBe(5);
    });
    it('should return the multiplication of 10 * 5', () => {
      expect(arithmeticController.multiplication(10, 5)).toBe(50);
    });
    it('should return the division of 10 / 5', () => {
      expect(arithmeticController.division(10, 5)).toBe(2);
    });
  });
});
