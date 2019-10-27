import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  environment: any;
  authorized: any;
  mySubscription: any;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, private cookieService: CookieService) {


  }

  ngOnInit() {



  }
  

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }


}
