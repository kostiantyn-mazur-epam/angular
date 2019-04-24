import { Component, OnInit, Optional, inject } from '@angular/core';
import { LocalStorageService, ConfigOptionsService, ConstantService, GeneratorService } from '../core';
// import {LocalStorageService} from '../core/services/local-storage.service';
// import {ConstantService } from '../core/services/constant.service';
// import {ConfigOptionsService } from '../core/services/config-options.service';

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
