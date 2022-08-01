import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import {Error} from "../error";


@Injectable()
export class ValidationParams implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (['en', 'ru'].includes(value)) {
      return value;
    }

    throw new HttpException(Error.INVALID_LANGUAGE, HttpStatus.BAD_REQUEST);
  }
}