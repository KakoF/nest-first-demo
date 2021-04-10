import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()
        const user = request.user;
        if (user && user.role === 'Admin') {
            return true
        }
        throw new HttpException('Unauthorize access', HttpStatus.UNAUTHORIZED)
    }
}