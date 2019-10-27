import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  authorized: any;
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("accessToken") != null) {
      this.authorized = true;
    }
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  isAuthorized() {
    if (localStorage.getItem("accessToken") != null)
      return true;
  }

  isROUser() {
    //console.info('localStorage.getItem("userRole"): ' + localStorage.getItem("userRole"));
    if (localStorage.getItem("userRole") === 'roUser')
      return true;
  }

  isUser() {
    //console.info('localStorage.getItem("userRole"): ' + localStorage.getItem("userRole"));
    if (localStorage.getItem("userRole") === 'user')
      return true;
  }

  isAdmin() {
    //console.info('localStorage.getItem("userRole"): ' + localStorage.getItem("userRole"));
    if (localStorage.getItem("userRole") === 'admin')
      return true;
  }

}