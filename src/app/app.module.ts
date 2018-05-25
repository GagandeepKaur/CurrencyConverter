import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DisclaimerComponent } from './app/disclaimer/disclaimer.component';
import { CurrencyContainerComponent } from './app/currency-container/currency-container.component';



@NgModule({
    declarations: [
        AppComponent,
        DisclaimerComponent,
        CurrencyContainerComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

