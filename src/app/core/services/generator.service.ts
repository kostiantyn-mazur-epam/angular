import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
  useFactory: provideGeneratorFactory,
  deps: [5]
})

export class GeneratorService {

  // private length: number;

  constructor(private length: number) { }

  getNumbers(): string {
    return Math.random()
      .toString(36)
      .substring(2, this.length + 2)
      .split('')
      .map(el => Math.random() < 0.5 ? el.toUpperCase() : el)
      .join('');
  }
}

export function provideGeneratorFactory(length: number) {
  return new GeneratorService(length);
}
