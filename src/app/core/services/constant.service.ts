import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
  useValue: {
    app: 'TaskManager',
    version: '1.0'
  }
})
export class ConstantService {

  constructor() { }
}
