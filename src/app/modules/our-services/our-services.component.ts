import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class ServicesComponent {
  value = '';
  previousFilter: string = "col-6";
  previousFilterType: string = "filter-double";
  servicesList = [
    {
      img: '/assets/services-images/behavior-classes.jpg',
      name: 'Dog behavior Training',
      amount: '$30.00'
    },
    {
      img: '/assets/services-images/dog-day-activity.jpg',
      name: 'Dog Day Activity',
      amount: '$10.00'
    },
    {
      img: '/assets/services-images/doggy-camp.jpg',
      name: 'Doggy Day Camp',
      amount: '$5.00'
    },
    {
      img: '/assets/services-images/health-package.jpg',
      name: 'Dog Health Package',
      amount: '$50.00'
    },
    {
      img: '/assets/services-images/pet-sitting.jpg',
      name: 'Pet Sitting',
      amount: '$20.00'
    },
    {
      img: '/assets/services-images/training-webinar.jpg',
      name: 'Dog Training Webinar',
      amount: '$60.00'
    }
  ];


  constructor() { }

  columsFilter(filter: string, filterType: string) {
    let cards = document.querySelectorAll(".cards");
    document.querySelector("." + this.previousFilterType)?.classList.remove("active")
    document.querySelector("." + filterType)?.classList.add("active")
    cards.forEach((e) => e.classList.replace(this.previousFilter, filter))
    this.previousFilter = filter;
    this.previousFilterType = filterType;
  }

  sreachFilter() {
    
  }



}
