export declare class BaseException extends Error {
  constructor(message: string);
}
export declare class SettingsException extends BaseException {
  constructor(missingProperty: string);
}
