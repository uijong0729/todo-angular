import { Config, ConfigService } from './../../service/config-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers: [ ConfigService ]
})
export class ConfigComponent {

  contents: Config;

  constructor(private configService :ConfigService) {

  }

  showConfig() {
    this.configService.getConfig().subscribe(results => this.contents = results)
  }
}
