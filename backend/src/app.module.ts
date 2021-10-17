import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './settings/settings.module';
import { SettingsService } from './settings/settings.service';
import { Tasks } from './tasks';

@Module({
  imports: [
    SettingsModule,
    TypeOrmModule.forRootAsync({
      imports: [SettingsModule],
      inject: [SettingsService],
      useFactory: async (settingsService: SettingsService) => ({
        host: settingsService.dbHost,
        type: settingsService.dbType as any,
        database: settingsService.dbDatabase,
        username: settingsService.dbUser,
        password: settingsService.dbPassword,
        entities: [Tasks],
        synchronize: true,
        logging: false,
      }),
    }),
    TypeOrmModule.forFeature([Tasks]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
