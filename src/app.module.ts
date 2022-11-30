import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://dev:dev@localhost:27888/?authMechanism=DEFAULT',
    ),
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
