import { PartialType } from '@nestjs/mapped-types';
import { CreateSendgridDto } from './create-sendgrid.dto';

export class UpdateSendgridDto extends PartialType(CreateSendgridDto) {}
