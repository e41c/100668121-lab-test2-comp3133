
// src\app\app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { AppConfig } from './app.config';

// Define a custom type that extends ApplicationConfig
interface CustomApplicationConfig extends ApplicationConfig {
  apiUrl: string; // Add the required property
}

// Define the server configuration object with the custom type
const serverConfig: CustomApplicationConfig = {
  apiUrl: 'https://api.spacexdata.com/v3', // Specify the apiUrl property
  providers: [
    provideServerRendering()
  ],
};

// Merge AppConfig and serverConfig
export const config: CustomApplicationConfig = Object.assign({}, AppConfig, serverConfig);
