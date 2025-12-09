import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArithmeticModule } from './arithmetic/arithmetic.module';
import { LogMiddleware } from './mid/log/log.middleware';

@Module({
  imports: [ArithmeticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(LogMiddleware).forRoutes('*');
    consumer.apply(LogMiddleware).forRoutes('arithmetic');
  }
}
