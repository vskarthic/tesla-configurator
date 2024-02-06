import { Component, OnInit } from "@angular/core";
import { TeslaService } from "../services/tesla-service";
import { TeslaCar, TeslaColor, TeslaModel } from "../model/tesla-model";
import { TeslaConfig } from "../model/tesla-config-option";

@Component({
    selector: "tesla-home",
    templateUrl: "./tesla-home.component.html",

})
export class TeslaHomeComponent implements OnInit {
    teslaModel: string = "";
    colors: TeslaColor[] = [];
    teslaColor: string = "";
    modelData: TeslaModel[] = [];
    queryData!: TeslaCar;
    constructor(private teslaService: TeslaService) {

    }
    ngOnInit() {
        this.teslaService.getCarModel().subscribe((data: TeslaModel[]) => {
            this.modelData = data;
            this.checkQueryData();
        })
    }
    checkQueryData() {
        let data: TeslaCar = this.teslaService.getData();
        if (data && data.model && data.colorObj) {
            this.teslaModel = data.model;
            this.colors = this.modelData.filter(element => element.code == this.teslaModel)[0]?.colors;
            this.teslaColor = data.colorObj.code;
            let colorObj: TeslaColor = this.colors.filter(element => element.code == this.teslaColor)[0]
            this.queryData = { model: this.teslaModel, colorObj: colorObj };
        }
    }
    onModelChange(model: string) {
        this.teslaColor = "";
        if (model) {
            this.colors = this.modelData.filter(element => element.code == model)[0].colors;
            if (this.queryData) {
                this.queryData.model = this.teslaModel;
            }
        } else {
            this.colors = [];
            this.queryData = {};
        }
        this.teslaService.setData(this.queryData);
    }
    onColorChange() {
        if (this.teslaColor && this.teslaModel) {
            let colorObj: TeslaColor = this.colors.filter(element => element.code == this.teslaColor)[0];
            this.queryData = { model: this.teslaModel, colorObj: colorObj };
        }else{
            this.queryData = {model: this.teslaModel};
        }
        this.teslaService.setData(this.queryData);
    }
}