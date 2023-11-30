import { Component, Inject } from '@angular/core';
import { MaterialExModule } from 'src/app/shared/material.module';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';


@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  standalone: true,
  imports: [MaterialExModule],
})

export class SnackBarComponent {
  constructor(public snackBarRef: MatSnackBarRef<unknown>, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
