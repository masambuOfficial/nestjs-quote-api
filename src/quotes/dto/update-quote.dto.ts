/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateQuoteDto } from './create-quote.dto';

export class UpdateAuthorDto extends PartialType(CreateQuoteDto) {}
