import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, map } from "rxjs";
import { TeslaCar, TeslaModel } from "../model/tesla-model";
import { TeslaConfigOption } from "../model/tesla-config-option";

@Injectable({
    providedIn: 'root'
})

export class TeslaService {
    queryData!: TeslaCar;
    subject = new Subject<boolean>()
    constructor(private http: HttpClient) {

    }
    getCarModel(): Observable<TeslaModel[]> {
        return this.http.get<TeslaModel[]>('/models').pipe(map((data: TeslaModel[]) => {
            let modelObj: Array<TeslaModel> = [];
            data.forEach((element: TeslaModel) => {
                modelObj.push(new TeslaModel(element.code, element.description, element.colors))
            });
            return modelObj;
        }));
    }
    getConfigOptions(modelId: string): Observable<TeslaConfigOption> {
        return this.http.get<TeslaConfigOption>('/options/' + modelId).pipe(map((data: TeslaConfigOption) => {
            return new TeslaConfigOption(data.configs, data.towHitch, data.yoke);
        }));
    }
    setData(data: TeslaCar) {
        this.queryData = data;
        this.subject.next(true);
    }
    getData() {
        return this.queryData;
    }
}