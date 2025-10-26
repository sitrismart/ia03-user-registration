import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    if (!email || !password) {
      return { message: 'Email and password are required' };
    }
    const user = await this.userService.register(email, password);
    return { message: 'User registered successfully', user };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    if (!email || !password)
      return { message: 'Email and password are required' };
    const result = await this.userService.login(email, password);
    return result;
  }
}
