import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { LoginDTO, RegisterDTO } from 'src/models/user.dto';

@Injectable()
export class AuthService {
  private mockUser = {
    email: 'email@email.com.br',
    token: 'jwt.token.here',
    username: 'nameuser',
    bio: "I'm a mocked user!",
    image: null,
  };

  register(credentials: RegisterDTO) {
    return this.mockUser;
  }

  login(credentials: LoginDTO){
    if(credentials.email === this.mockUser.email) {
      return this.mockUser;
    }
    throw new InternalServerErrorException();
  }
}
