import { LeadsComments } from 'src/entity/leadComment.entity';
import { LeadController } from './lead.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leads } from '../entity/leads.entity';
import { LeadService } from './lead.service';
import { Module } from '@nestjs/common';




@Module({
  imports: [TypeOrmModule.forFeature([Leads,LeadsComments])],
  controllers: [LeadController],
  providers: [LeadService]
})
export class LeadModule {}
