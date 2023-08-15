import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OurService } from 'src/app/services/our-services/our-service';
import { OurServicesService } from 'src/app/services/our-services/our-services.service';
import { SericesDetialsComponent } from './serices-detials/serices-detials.component';

@Component({
  selector: 'app-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class ServicesComponent {
  ourServicesList!: OurService[];
  services: OurServicesService = inject(OurServicesService);
  filteredServicesList!: OurService[];

  constructor(private dialog: MatDialog) {
    this.ourServicesList = this.services.getAllOurServices();
    this.filteredServicesList = this.ourServicesList;
  }

  openDialog(item: object) {
    this.dialog.open(SericesDetialsComponent, {
      width: '650px',
      data: item
    });
  }

  stop(event: Event) { event.stopPropagation() }

  receiveSearchData(data: any) {
    if (data!) { this.filteredServicesList = this.ourServicesList; }
    this.filteredServicesList = this.ourServicesList.filter(e => e?.name.toLowerCase().includes(data.toLowerCase()));
  }
}
