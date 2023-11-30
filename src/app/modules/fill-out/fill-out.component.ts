import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fill-out',
  templateUrl: './fill-out.component.html',
  styleUrls: ['./fill-out.component.scss']
})
export class FillOutComponent {
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
}
