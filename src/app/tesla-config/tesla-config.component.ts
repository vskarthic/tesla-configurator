import { Component, OnInit } from '@angular/core';
import { TeslaService } from '../services/tesla-service';
import { TeslaCar } from '../model/tesla-model';
import { Route, Router } from '@angular/router';
import { TeslaConfig, TeslaConfigOption } from '../model/tesla-config-option';

@Component({
  selector: 'tesla-model',
  templateUrl: './tesla-config.component.html',
})
export class TeslaConfigComponent implements OnInit {
  data!: TeslaCar;
  configData!: TeslaConfigOption;
  configOption: string = '';
  constructor(private teslaService: TeslaService, private route: Router) { }
  ngOnInit() {
    this.data = this.teslaService.getData();
    if (this.data?.model) {
      this.teslaService.getConfigOptions(this.data.model).subscribe((options: TeslaConfigOption) => {
        this.configData = options;
        if (this.data.config) {
          this.configOption = String(this.data.config?.id);
          this.configData.towHitch = this.data.towHitch!;
          this.configData.yoke = this.data.yoke!;
        }
      });
    } else {
      this.route.navigate(['home']);
    }
  }
  get config(): TeslaConfig {
    return this.configData.configs.filter(
      (item: TeslaConfig) => item.id == parseInt(this.configOption)
    )[0];
  }
  onModelChange(configOption: string) {
      let configData: TeslaConfig = this.configData.configs.filter(
        (item: TeslaConfig) => item.id == parseInt(this.configOption)
      )[0];
      this.data.config = configData;
      this.data.towHitch = this.configData.towHitch;
      this.data.yoke = this.configData.yoke;
      this.teslaService.setData(this.data);
  }
  changeValue(event: Event, type: string) {
    const isChecked = (<HTMLInputElement>event.target).checked;
    // this.data = this.teslaService.getData();
    if (type == 'towHitch') {
      this.data.towHitch = isChecked;
    } else if (type == 'yoke') {
      this.data.yoke = isChecked;
    }
    this.teslaService.setData(this.data);
  }
}
