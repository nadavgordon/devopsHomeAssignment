import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SettingsService } from './settings/settings.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const settingsService = app.get(SettingsService);

  app.enableCors({origin: settingsService.corsOriginAllow});
  await app.listen(8000);
}
bootstrap();
