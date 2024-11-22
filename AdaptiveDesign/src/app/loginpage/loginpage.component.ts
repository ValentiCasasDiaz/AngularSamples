import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

  isHandsetProtrait: boolean = false;
  isWebLandscape: boolean = true; // Ideal Resolution 1280x1024

  constructor(private responsive: BreakpointObserver) {
    // console.log('Web ' + Breakpoints.Web);
    // console.log('WebLandscape ' + Breakpoints.WebLandscape);
    // console.log('WebPortrait ' + Breakpoints.WebPortrait);

    // console.log('Tablet ' + Breakpoints.Tablet);
    // console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
    // console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

    // console.log('Handset ' + Breakpoints.Handset);
    // console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
    // console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

    // console.log('XSmall ' + Breakpoints.XSmall);
    // console.log('Small ' + Breakpoints.Small);
    // console.log('Medium ' + Breakpoints.Medium);
    // console.log('Large ' + Breakpoints.Large);
    // console.log('XLarge ' + Breakpoints.XLarge);
  }

  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.WebLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isHandsetProtrait = true;
          this.isWebLandscape = false;

          console.log('screens matches HandsetPortrait');
        }
        else if (breakpoints[Breakpoints.WebLandscape]) {
          this.isHandsetProtrait = false;
          this.isWebLandscape = true;

          console.log('screens matches WebLandscape');
        }
      });
  }

  getTitleFontStyle() {
    return {
      "font-size": (this.isWebLandscape) ? "10em" : "5em"
    };
  }

  getTextFontStyle() {
    return {
      "font-size": (this.isWebLandscape) ? "3.5em" : "2em"
    };
  }
}
