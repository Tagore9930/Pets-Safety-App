import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-serices-detials',
  templateUrl: './serices-detials.component.html',
  styleUrls: ['./serices-detials.component.scss']
})
export class SericesDetialsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
  }
}
