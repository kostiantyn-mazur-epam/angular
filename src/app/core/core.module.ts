import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorService, provideGeneratorFactory } from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers: [
  //   {provide: GeneratorService, useFactory: provideGeneratorFactory(5)}
  // ]
})
export class CoreModule { }
