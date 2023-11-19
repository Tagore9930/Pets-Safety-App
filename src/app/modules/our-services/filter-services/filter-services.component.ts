import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-services',
  templateUrl: './filter-services.component.html',
  styleUrls: ['./filter-services.component.scss']
})

export class FilterServicesComponent {
  @Output() sendData: EventEmitter<object> = new EventEmitter;
  @Output() updateCols = new EventEmitter()

  inputValue = '';
  previousFilter: string = "col-6";
  previousFilterType: string = "filter-double";
  currentFilter: string = "col-6";
  currentFilterType: string = "filter-double";

  constructor() { }

  columsFilter(filter: string, filterType: string, searching: boolean) {
    if (searching == false) {
      this.previousFilter = this.currentFilter;
      this.previousFilterType = this.currentFilterType;
      document.querySelector("." + this.previousFilterType)?.classList.remove("active")
      document.querySelector("." + filterType)?.classList.add("active")
    }

    this.currentFilter = filter;
    this.currentFilterType = filterType;
    this.updateCol(this.currentFilter);
  }


  searchFilter() {
    this.sendData.emit({
      "inputValue": this.inputValue,
      "currentFilter": this.currentFilter,
      "currentFilterType": this.currentFilterType
    });
  }

  updateCol(value: any) { this.updateCols.emit(value); }
}
