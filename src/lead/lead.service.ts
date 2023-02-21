import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConstMessages as CM } from '../utility/const-message-enum';
import { LeadsComments } from '../entity/leadComment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LeadFormDto } from './dto/lead-form.dto';
import { Leads } from 'src/entity/leads.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeadService {
    constructor(@InjectRepository(Leads) private leadsRepository: Repository<Leads>,
        @InjectRepository(LeadsComments) private leadsComments: Repository<LeadsComments>
    ) { }

    async getLeadDetails(query: any) {
        const source = query.source || "";
        let sourceValue;

        switch (source) {
            case "CF": {
                sourceValue = "cfresh";
            } break;
            case "NW": {
                sourceValue = "new";
            } break;
            case "FW": {
                sourceValue = "follow-up";
            } break;
        }

        const leadData = await this.leadsRepository.find({
            where: {
                status: sourceValue
            },
            order: {
                creation_time: "DESC"
            }
        });

        if (leadData.length <= 0) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: CM.NO_CONTENT_FOUND,
            }, HttpStatus.BAD_REQUEST);
        }

        return leadData;
    }

    async generateLeads(leadFormDto: LeadFormDto): Promise<any> {

        const leadData = await this.leadsRepository.findOne({
            where: {
                mobile: leadFormDto.mobile
            }
        });

        if (leadData) {
            leadData.status = "cfresh"
            return await this.leadsRepository.save(leadData);

        } else {
            const saveMasterOrderObj = this.leadsRepository.create();
            saveMasterOrderObj.full_name = leadFormDto.fullName;
            saveMasterOrderObj.email = leadFormDto.email;
            saveMasterOrderObj.mobile = leadFormDto.mobile;
            saveMasterOrderObj.city = leadFormDto.city;
            saveMasterOrderObj.source = leadFormDto.source;
            saveMasterOrderObj.status = "new";
            saveMasterOrderObj.call_status = "";
            saveMasterOrderObj.creation_time = new Date().getTime();
            saveMasterOrderObj.updation_time = new Date().getTime();
            let insertResult = await this.leadsRepository.save(saveMasterOrderObj);

            return insertResult;
        }
    }

    async saveLeadComment(id: number, query: any): Promise<any> {
        const comment = query.comment || "";

        const saveObj = this.leadsComments.create();
        saveObj.lead_id = id;
        saveObj.comment = comment;
        saveObj.creation_time = new Date().getTime();
        saveObj.updation_time = new Date().getTime();

        let insertResult = await this.leadsComments.save(saveObj);

        const leadData = await this.leadsRepository.findOne({
            where: {
                lead: id
            }
        });

        if (leadData) {
            leadData.status = "follow-up";
            leadData.call_status = "received";
            return await this.leadsRepository.save(leadData);
        }

        return insertResult;
    }
}
