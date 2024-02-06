import { TeslaConfig } from "./tesla-config-option";

export class TeslaModel {
    code!: string;
    description!: string;
    colors: TeslaColor[] = [];
    constructor(code: string, description: string, colors: TeslaColor[]) {
        this.code = code;
        this.description = description;
        colors.forEach((color:TeslaColor)=>{
            this.colors.push(new TeslaColor(color.code,color.description,color.price))
        })
    }
}
export class TeslaColor {
    code!: string;
    description!: string;
    price: number = 0;
    constructor(code: string, description: string, price:number) {
        this.code = code;
        this.description = description;
        this.price = price;
    }
}

export interface TeslaCar{
    model?:string;
    colorObj?:TeslaColor;
    config?:TeslaConfig,
    towHitch?:boolean,
    yoke?:boolean,
}