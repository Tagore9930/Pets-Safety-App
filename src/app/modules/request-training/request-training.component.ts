import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-request-training',
  templateUrl: './request-training.component.html',
  styleUrls: ['./request-training.component.scss']
})
export class RequestTrainingComponent {

  isActive!: number;
  selected: Date = new Date();
  minDate: Date = new Date();
  maxDate: Date;
  isTime!: string;

  availableTimes = [
    { time: ' 1:00 AM ' },
    { time: ' 2:00 AM ' },
    { time: ' 3:00 AM ' },
    { time: ' 6:00 AM ' },
    { time: ' 7:00 AM ' },
    { time: ' 8:00 AM ' }
  ];

  foods: Food[] = [
    { value: 'Yelp-0', viewValue: 'Yelp' },
    { value: 'Facebook-1', viewValue: 'Facebook' },
    { value: 'Twitter-2', viewValue: 'Twitter' },
    { value: 'Instagram-3', viewValue: 'Instagram' },
    { value: 'YouTube-4', viewValue: 'YouTube' },
    { value: 'Online-Ads-5', viewValue: 'Online Ads' },
    { value: 'Google-Search-6', viewValue: 'Google Search' },
    { value: 'Referred-friend-7', viewValue: 'Referred by a friend' },
    { value: 'TV-commercial-8', viewValue: 'TV commercial' },
  ];

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(this.selected);
    this.maxDate = new Date(currentYear + 9, 11, 31);
  }

  selectTime(i: any, event: any) {
    this.isActive = i;
    this.isTime = event?.target?.innerText;
    let requestSelectedTime = document.querySelector(".requestSelectedTime");
    requestSelectedTime?.classList?.remove("visiblity-none")
    console.log("correct", event);
  }

  // incrementDate() {
  //     // this.date.value gets the current value
  //     // it is a moment value and we can use add function to increment value
  //     // this.date.setValue(this.date.value.add(1, 'days'));
  //     console.log(this.selected);
  //     const currentDate = this.selected.getDate();
  //     let t = this.selected.setDate(currentDate + 1);
  //     console.log(t, this.selected.setDate(currentDate + 1));
  //     // this.selected = t;
  //     this.selected.setDate(currentDate + 1)
  //     console.log(this.selected);

  // }
}
