import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/products'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
