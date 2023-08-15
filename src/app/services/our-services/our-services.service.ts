import { Injectable } from '@angular/core';
import { OurService } from './our-service';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {
  protected ourServicesList: OurService[] = [
    {
      id: 1,
      img: '/assets/services-images/behavior-classes.jpg',
      name: 'Dog behavior Training',
      amount: '$30.00',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate tenetur! Pariatur aliquid recusandae nisi incidunt, illo fugiat necessitatibus, maxime, obcaecati accusamus quod tempora numquam neque tempore fugit quo praesentium"
    },
    {
      id: 2,
      img: '/assets/services-images/dog-day-activity.jpg',
      name: 'Dog Day Activity',
      amount: '$10.00',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate tenetur! Pariatur aliquid recusandae nisi incidunt, illo fugiat necessitatibus, maxime, obcaecati accusamus quod tempora numquam neque tempore fugit quo praesentium"
    },
    {
      id: 3,
      img: '/assets/services-images/doggy-camp.jpg',
      name: 'Doggy Day Camp',
      amount: '$5.00',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate tenetur! Pariatur aliquid recusandae nisi incidunt, illo fugiat necessitatibus, maxime, obcaecati accusamus quod tempora numquam neque tempore fugit quo praesentium"
    },
    {
      id: 4,
      img: '/assets/services-images/health-package.jpg',
      name: 'Dog Health Package',
      amount: '$50.00',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate tenetur! Pariatur aliquid recusandae nisi incidunt, illo fugiat necessitatibus, maxime, obcaecati accusamus quod tempora numquam neque tempore fugit quo praesentium"
    },
    {
      id: 5,
      img: '/assets/services-images/pet-sitting.jpg',
      name: 'Pet Sitting',
      amount: '$20.00',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate tenetur! Pariatur aliquid recusandae nisi incidunt, illo fugiat necessitatibus, maxime, obcaecati accusamus quod tempora numquam neque tempore fugit quo praesentium"
    },
    {
      id: 6,
      img: '/assets/services-images/training-webinar.jpg',
      name: 'Dog Training Webinar',
      amount: '$60.00',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate tenetur! Pariatur aliquid recusandae nisi incidunt, illo fugiat necessitatibus, maxime, obcaecati accusamus quod tempora numquam neque tempore fugit quo praesentium"
    }
  ];

  constructor() { }

  getAllOurServices(): OurService[] {
    return this.ourServicesList;
  }
}
