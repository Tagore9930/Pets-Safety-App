import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent {
  userSignIn: boolean = false;
  headerTwo: boolean = false;
  headerTwoHeading: string = "Fill Out";

  constructor(private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef) { }

    changeOfRoutes() {
    let url = this.activatedRoute.firstChild?.routeConfig?.path;

    switch (url) {
      case "fill-out": this.headerTwo = true;
        this.headerTwoHeading = "Fill out";
        break;
      case "request-training":
        this.headerTwo = true;
        this.headerTwoHeading = "Request training";
        break;
      case "training-progress":
        this.headerTwo = true;
        this.headerTwoHeading = "Training progress";
        break;
      default:
        this.headerTwo = false
        break;
    }

    this.cd.detectChanges();
  }
}
