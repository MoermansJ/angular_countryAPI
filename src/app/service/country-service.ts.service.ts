import CountryData from './CountryData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class CountryService {
  //properties
  countryData?: CountryData;

  //constructor
  constructor(private httpClient: HttpClient) {}

  //custom methods
  public getCountry(country: String): Observable<CountryData[]> {
    return this.httpClient.get<CountryData[]>(
      `https://restcountries.com/v3.1/name/${country}`
    );
  }
}
