import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-services',
  templateUrl: './filter-services.component.html',
  styleUrls: ['./filter-services.component.scss']
})
export class FilterServicesComponent {
  value = '';
  previousFilter: string = "col-6";
  previousFilterType: string = "filter-double";

  columsFilter(filter: string, filterType: string) {
    let cards = document.querySelectorAll(".cards");
    document.querySelector("." + this.previousFilterType)?.classList.remove("active")
    document.querySelector("." + filterType)?.classList.add("active")
    cards.forEach((e) => e.classList.replace(this.previousFilter, filter))
    this.previousFilter = filter;
    this.previousFilterType = filterType;
  }

  @Output() sendData:EventEmitter<string> = new EventEmitter;

  searchFilter() {
    this.sendData.emit(this.value);
  }
}
