export class TeslaConfigOption {
    configs: TeslaConfig[] = [];
    towHitch: boolean = false;
    yoke: boolean = false;
    constructor(configs:TeslaConfig[],towHitch:boolean,yoke:boolean){
        this.towHitch = towHitch;
        this.yoke = yoke;
        configs.forEach((config:TeslaConfig)=>{
            this.configs.push(new TeslaConfig(config.id,config.description,config.price,config.range,config.speed))
        })
    }

}
export class TeslaConfig {
    id!: number;
    description!: string;
    price!: number;
    range!: number;
    speed!: number;
    constructor(id: number, description: string, price: number, range: number, speed: number) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.range = range;
        this.speed = speed;
    }
}