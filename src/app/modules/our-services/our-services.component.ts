import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class ServicesComponent {
  servicesList = new Array(10);
  value = '';
  previousFilter: string = "col-6";
  previousFilterType: string = "filter-double";


  constructor() { }

  filter(filter: string, filterType: string) {
    let cards = document.querySelectorAll(".cards");
    document.querySelector("." + this.previousFilterType)?.classList.remove("active")
    document.querySelector("." + filterType)?.classList.add("active")
    cards.forEach((e) => e.classList.replace(this.previousFilter, filter))
    this.previousFilter = filter;
    this.previousFilterType = filterType;
  }

}
