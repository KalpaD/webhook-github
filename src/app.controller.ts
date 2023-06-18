import { Controller, Post, Body, Logger, Injectable, Request, Response, HttpStatus} from '@nestjs/common';
import { AppService } from './app.service';
import * as crypto from 'crypto';


@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  private readonly WEBHOOK_SECRET: string = process.env.WEBHOOK_SECRET;
  constructor(private readonly appService: AppService) {}

  @Post()
  public handleWebhook(@Request() req: Request, @Response() res: Response): void {
  this.logger.log(`x-hub-signature-256 ${req.headers['x-hub-signature-256']}`)
   if (!this.verifySignature(req)) {
      this.logger.error('Signature verification failed');
      return;
   }
   this.logger.log('Doing something...');
  }

  private verifySignature(req: Request): boolean {
      const signature = crypto
         .createHmac('sha256', this.WEBHOOK_SECRET)
         .update(JSON.stringify(req.body))
         .digest('hex');
       return `sha256=${signature}` === req.headers['x-hub-signature-256'];
  }
}


