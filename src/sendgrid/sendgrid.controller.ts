import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';
import { CreateSendgridDto } from './dto/create-sendgrid.dto';
import { UpdateSendgridDto } from './dto/update-sendgrid.dto';

@Controller('sendgrid')
export class SendgridController {
  constructor(private readonly sendgridService: SendgridService) {}

  @Post()
  sendEMail() {
    return this.sendgridService.sendEmail();
  }

  
}
