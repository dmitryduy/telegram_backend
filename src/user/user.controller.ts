import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { LoginUserDto } from "./dto/loginUser.dto";

@Controller('user')
export class UserController{
  @UsePipes(new ValidationPipe())
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto){
    return
  }
}