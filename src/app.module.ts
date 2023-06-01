import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
import { LeadModule } from './lead/lead.module';
import { SendgridService } from './sendgrid/sendgrid.service';
import { SendgridModule } from './sendgrid/sendgrid.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), LeadModule, SendgridModule],
  providers: [SendgridService]
})
export class AppModule {}
