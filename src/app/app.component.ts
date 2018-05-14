import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'my-app',
  templateUrl: `./index.html`,
})
export class AppComponent  { 

	cities: any;
	countries: any;
	country_name: any;
	measurements: any;
	country: any;
	_http: any;
	lat: any;
	location: any;
	information:any="";
	lng: any;
	label_name: string = "jay";
	pollution_info: any;
	city_location: any;
	coordinates: any;
	labelOptions: any= {
		color: '#000',
		fontFamily: '',
		fontSize: '14px',
		fontWeight: 'bold',
		text: 'Some Text',
		background: '#fff',
		}
	constructor(private http: Http){
		this.http.get("https://api.openaq.org/v1/countries")
		.map((response: Response) => this.countries = response.json().results).subscribe();

		this._http = http;

		this._http.get("https://api.openaq.org/v1/latest?country=AD")
		.map((response:Response) => this.measurements = response.json().results).subscribe();

	}
	
	loadCity(name:any){

		this.country = name.value;

		this._http.get("https://api.openaq.org/v1/latest?country="+this.country)
		.map((response:Response) => this.measurements = response.json().results).subscribe();

	} 

	cityLocation(city:any, cityObj:any){

		this.location = city;
		this._http.get("https://api.openaq.org/v1/latest?city="+this.location)
		.map((response:Response) => {this.pollution_info = response.json().results[0].measurements;
		for (let info of this.pollution_info ) {
			this.information = this.information + " " + info.parameter +" " + info.value + " " + info.unit + "\n";
		}
		this.labelOptions.text=this.information;}).subscribe();
		
		this._http.get("https://api.openaq.org/v1/locations?city="+this.location)
		.map((response:Response) => {this.coordinates = response.json().results[0].coordinates;this.lat = this.coordinates.latitude;
			this.lng = this.coordinates.longitude;}).subscribe();	
	}
}