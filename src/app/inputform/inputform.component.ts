import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import CountryData from '../service/CountryData';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css'],
})
@Injectable({
  providedIn: 'root', // Angular provides a single instance for the entire application
})
export class InputformComponent {
  //variables
  country = ''; //from <input>
  countryData?: CountryData;

  //constructor
  constructor(private httpClient: HttpClient) {}

  //event handlers
  handleButtonClick(): void {
    //on <button>
    this.httpClient
      .get<CountryData[]>(`https://restcountries.com/v3.1/name/${this.country}`)
      .subscribe((response: CountryData[]) => {
        console.log(response);
        this.countryData = response[0];
      });

    //fetch
    // fetch(`https://restcountries.com/v3.1/name/${this.country}`)
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log('ok');
    //     } else {
    //       console.log('not ok');
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     this.countryData = data;
    //     console.log(data);
    //   })
    //   .catch((error) => console.log('ERROR'));
  }
}
