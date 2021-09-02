import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  styleUrls: ['./basic.component.scss'],
  template: `<div class="container-fluid pb-5">
    <header
      class="pt-4 pb-md-5 pb-sm-5 px-4 px-lg-5 d-flex justify-content-center header-sticky"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2880px-International_Pok%C3%A9mon_logo.svg.png"
        width="900"
        height="150"
      />
    </header>
    <router-outlet></router-outlet>
  </div>`,
})
export class BasicComponent {}
