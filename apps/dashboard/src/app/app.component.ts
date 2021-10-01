import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@ng-mfe/shared/data-access-user';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'ng-mfe-root',
  template: `
  <header>__________________________________</header>
    <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      <p>You are authenticated so you can see this content.</p>
      <ui-page-one title="asddsaads"></ui-page-one>
      <ui-page-two content="foo bar"></ui-page-two>
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
  styles: [``],
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
  }
}
