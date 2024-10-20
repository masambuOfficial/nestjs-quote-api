import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-quote.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
