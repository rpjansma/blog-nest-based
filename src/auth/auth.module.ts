import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserEntity } from 'src/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
  TypeOrmModule.forFeature([UserEntity]),
  JwtModule.register({
    secret: process.env.SECRET,
    signOptions: {
      expiresIn: 3600,
    },
  }),
  PassportModule.register({ defaultStrategy: 'jwt'})
],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
