import { Component, Input } from '@angular/core';
import CountryData from '../service/CountryData';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  @Input() countryData?: CountryData;
}
