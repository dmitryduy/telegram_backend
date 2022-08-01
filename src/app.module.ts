import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./user/user.module";
import { CountryModule } from "./country/country.module";

@Module({
  imports: [UserModule, CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
