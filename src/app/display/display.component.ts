import { Component, Injectable, Input } from '@angular/core';
import CountryData from '../service/CountryData';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class DisplayComponent {
  @Input() countryData?: CountryData;
}
