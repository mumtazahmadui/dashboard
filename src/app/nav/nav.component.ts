import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{
  toolbarTitle: string;
  menuItems = [
    {name : 'home', icon: 'home'},
    {name : 'My Card', icon: 'credit_card'},
    {name : 'Transactions', icon: 'list_alt'},
    {name : 'Notifications', icon: 'email'},
    {name : 'Payments', icon: 'monetization_on'},
    {name : 'Users', icon: 'group'},
    {name : 'Audit Logs', icon: 'contact_phone'},
    {name : 'Settings', icon: 'settings'}
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.toolbarTitle =  this.router.url.replace('/','');
        }
      }
    );
  }
}
