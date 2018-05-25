import { Component } from '@angular/core';
import { DataService } from './app.service';
import { OnInit } from '@angular/core';
import 'rxjs';

@Component({
    selector: 'app-bulb-converter',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ DataService ],
})

export class AppComponent implements OnInit {
    ngOnInit() {
        
    }
   
}


