import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TeslaService } from "./services/tesla-service";
import { NavTabComponent } from "./nav-tab/nav-tab.component";
import { TeslaHomeComponent } from "./tesla-home/tesla-home.component";
import { TeslaConfigComponent } from "./tesla-config/tesla-config.component";
import { SummaryComponent } from "./summary/summary.component";
import { CarImageComponent } from "./car-image/car-image.component";

@NgModule({
    declarations: [
        AppComponent, TeslaHomeComponent, TeslaConfigComponent, SummaryComponent
    ],
    providers: [TeslaService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NavTabComponent,
        CarImageComponent
    ]
})
  export class AppModule { }