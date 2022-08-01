import { Controller, Get, Param } from "@nestjs/common";

import { ICountry } from "./country.interface";
import { CountryService } from "./country.service";
import { ValidationParams } from "./country.validation.pipe";
import { language } from "./country.types";


@Controller('countries')
export class CountryController{
  constructor(private readonly countryService: CountryService) {}

  @Get(':language')
  getCountries(@Param('language', new ValidationParams()) language: language): ICountry[]{
    return this.countryService.getCountries(language);
  }
}