import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent }  from './app.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports:      [ BrowserModule, CommonModule, HttpModule, AgmCoreModule.forRoot({
apiKey: 'AIzaSyCtUAcKts2F3mU3ur8iaiTzLBCgP6aC4Xg'
  })],
  declarations: [ AppComponent, MapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
