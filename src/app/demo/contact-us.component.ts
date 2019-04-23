import { Component, OnInit, Optional } from '@angular/core';
import { LocalStorageService, ConstantService, GeneratorService, ConfigOptionsService } from '../core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional()
    private localStorageService: LocalStorageService,
    @Optional()
    private constantService: ConstantService,
    @Optional()
    private generatorService: GeneratorService,
    @Optional()
    private configOptionsService: ConfigOptionsService ) { }

  ngOnInit() {
  }

}
