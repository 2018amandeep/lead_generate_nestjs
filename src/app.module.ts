import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
import { LeadModule } from './lead/lead.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), LeadModule]
})
export class AppModule {}
