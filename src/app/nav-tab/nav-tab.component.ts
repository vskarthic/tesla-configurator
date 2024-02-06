import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { TeslaService } from "../services/tesla-service";

@Component({
    selector:"tesla-nav-tab",
    templateUrl:"./nav-tab.component.html",
    styleUrl:'./nav-tab.component.scss',
    standalone:true,
    imports:[CommonModule,RouterModule]
})

export class NavTabComponent{
    @Input() activeTab:string = "";
    disableStep2:boolean = true;
    disableStep3:boolean = true;
    constructor(private route:Router,private service:TeslaService){

    }
    ngOnInit():void{
        this.enableButton();
        this.service.subject.subscribe((data:boolean)=>{
            this.enableButton();
        })
    }
    enableButton(){
        let queryData = this.service.getData();
        this.disableStep2 = !(queryData?.model && queryData?.colorObj);
        this.disableStep3 = !(queryData?.model && queryData?.colorObj && queryData?.config);
    }
    navigateTo(route:string){
        this.route.navigate([route])
    }
}