import { Component } from '@angular/core';
import CountryData from '../service/CountryData';
import { DisplayComponent } from '../display/display.component';
import CountryService from '../service/country-service.ts.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css'],
})
export class InputformComponent {
  //variables
  country = ''; //from <input>
  countryDataArr?: CountryData[];

  //constructor
  constructor(private countryService: CountryService) {}

  //event handlers
  handleButtonClick(): void {
    //on <button>
    this.countryService.getCountry(this.country).subscribe({
      next: (response: CountryData[]) => {
        this.countryDataArr = response;
        console.log(response);
      },

      error: (errorResponse: any) => console.log(errorResponse),
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
