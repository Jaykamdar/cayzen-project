import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { AgmCoreModule } from '@agm/core';

@Component({
    selector: 'google-map',
    styles: [`
      agm-map {
        height: 300px;
      }
    `],
    template: `
    <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
    `
  })
  export class MapComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;
  }
  