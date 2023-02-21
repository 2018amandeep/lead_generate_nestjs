import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { LeadFormDto } from './dto/lead-form.dto';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
    constructor(private leadService : LeadService){}
    @Get('/lead_details')
    @HttpCode(200)
    async getLeadDetails(@Query() query: { source: string}): Promise<any> {
        return await this.leadService.getLeadDetails(query);
    }

    @Post('/lead')
    @HttpCode(200)
    async generateLeads(@Body() leadFormDto : LeadFormDto ) : Promise<any>{
        return await this.leadService.generateLeads(leadFormDto)
    }

    @Post('/lead_comment/:id')
    @HttpCode(200)
    async saveLeadComment(@Param('id') id: number ,@Query() query: { comment: string} ) : Promise<any>{
        return await this.leadService.saveLeadComment(id, query);
    }
}
