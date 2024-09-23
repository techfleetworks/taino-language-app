// Nest.js Code Snippets

// CRUD Operations
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() user: CreateUserDto) {
    // Logic to save user to database
    return user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Logic to fetch user from database
    return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    // Logic to update user in database
    return user;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Logic to delete user from database
    return { success: true };
  }
}

// Event-Driven Development
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UserService {
  constructor(private eventEmitter: EventEmitter2) {}

  async createUser(user: CreateUserDto) {
    // Logic to save user to database
    this.eventEmitter.emit('user.created', user);
    return user;
  }
}

@Injectable()
export class UserCreatedListener {
  @OnEvent('user.created')
  handleUserCreatedEvent(user: User) {
    console.log('User created:', user);
  }
}

// Authentication (using Passport.js)
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  async validate(username: string, password: string): Promise<any> {
    // Logic to verify username and password
    if (username === 'admin' && password === 'password') {
      return { id: 1, username: 'admin' };
    }
    throw new UnauthorizedException();
  }
}

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return { message: 'Logged in successfully' };
  }
}
