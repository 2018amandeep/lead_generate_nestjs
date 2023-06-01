import { Module } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';
import { SendgridController } from './sendgrid.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  // imports:[
  //   MailerModule.forRoot({
  //     transport:{
  //       host:'',
  //       auth:{
  //         user:'',
  //         pass:''
  //       }
  //     }
  //   })  ],
  controllers: [SendgridController],
  providers: [SendgridService]
})
export class SendgridModule {}
