import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SettingsService } from './settings.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ['.env', '.env.defaults'] })],
  providers: [SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}
