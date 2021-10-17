import { Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SettingsException } from '../exceptions';

export const ENV_VARIABLES = {
  DB_HOST: 'DB_HOST',
  DB_USER: 'DB_USER',
  DB_PASSWORD: 'DB_PASSWORD',
  DB_DATABASE: 'DB_DATABASE',
  DB_TYPE: 'DB_TYPE',
  CORS_ORIGIN_ALLOW: 'CORS_ORIGIN_ALLOW',
};

@Injectable({ scope: Scope.DEFAULT })
export class SettingsService {
  dbHost: string;
  dbUser: string;
  dbPassword: string;
  dbDatabase: string;
  dbType: string;
  corsOriginAllow: string;

  private getOrThrow<T>(propertyPath: string): T {
    const value = this.configService.get<T>(propertyPath);
    if (value === undefined) {
      throw new SettingsException(propertyPath);
    }
    return value;
  }

  constructor(private readonly configService: ConfigService) {
    this.dbHost = this.getOrThrow<string>(ENV_VARIABLES.DB_HOST);
    this.dbUser = this.getOrThrow<string>(ENV_VARIABLES.DB_USER);
    this.dbPassword = this.getOrThrow<string>(ENV_VARIABLES.DB_PASSWORD);
    this.dbDatabase = this.getOrThrow<string>(ENV_VARIABLES.DB_DATABASE);
    this.dbType = this.getOrThrow<string>(ENV_VARIABLES.DB_TYPE);
    this.corsOriginAllow = this.getOrThrow<string>(
      ENV_VARIABLES.CORS_ORIGIN_ALLOW
    );
  }
}
