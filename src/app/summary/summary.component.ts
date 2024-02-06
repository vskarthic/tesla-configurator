import { Component } from '@angular/core';
import { NavTabComponent } from '../nav-tab/nav-tab.component';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { TeslaService } from '../services/tesla-service';
import { TeslaCar, TeslaModel } from '../model/tesla-model';
import { Router } from '@angular/router';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  modelData!: TeslaModel;
  carObj!: TeslaCar;
  totalCost: number = 0;
  constructor(private teslaService: TeslaService, private route: Router) {}
  ngOnInit(): void {
    this.carObj = this.teslaService.getData();
    if (this.carObj && this.carObj.model) {
      this.teslaService.getCarModel().subscribe((data: TeslaModel[]) => {
        this.modelData = data.filter(
          (ele: TeslaModel) => (ele.code == this.carObj.model)
        )[0];
      });
      this.calculateTotalCost();
    } else {
      this.route.navigate(['home']);
    }
  }
  calculateTotalCost(){
    this.totalCost = this.totalCost + this.carObj.config?.price!;
    if(this.carObj.colorObj?.price){
      this.totalCost = this.totalCost + this.carObj.colorObj.price;
    }
    if(this.carObj.towHitch){
      this.totalCost = this.totalCost + 1000;
    }
    if(this.carObj.yoke){
      this.totalCost = this.totalCost + 1000;
    }
  }
}
