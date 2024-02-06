import { Component, Input } from "@angular/core";

@Component({
    selector:"tesla-car-image",
    templateUrl:"./car-image.component.html",
    standalone:true,
})

export class CarImageComponent{
    @Input() teslaModel:string = "";
    @Input() teslaColor:string = "";
    constructor(){
    }
}