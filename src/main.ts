// src\main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core'; // Import ApplicationConfig
import { AppConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Define a custom type that extends ApplicationConfig
interface CustomApplicationConfig extends ApplicationConfig {
  apiUrl: string; // Add the required property
}

// Define the AppConfig object with the custom type
const customAppConfig: CustomApplicationConfig = {
  providers: [], // Add the providers property if needed
  apiUrl: 'your-api-url' // Specify the apiUrl property
};

// Merge AppConfig and customAppConfig
const mergedConfig = Object.assign({}, AppConfig, customAppConfig);

bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
