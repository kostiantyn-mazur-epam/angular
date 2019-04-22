import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private options: ConfigurationOptions;

  constructor() { }

  getOptions(): ConfigurationOptions {
    return this.options;
  }

  setOptions(options: object): void {
    Object.keys(options).forEach(key => {
      if (!!this.options[key]) {
        this.options[key] = options[key];
      }
    });
  }
}


export class ConfigurationOptions {
  id: number;
  email: string;
  login: string;
}