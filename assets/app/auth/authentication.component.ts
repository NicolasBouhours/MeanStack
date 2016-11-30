import { Component } from '@angular/core';

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <ul class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                    <li><a [routerLink]="['signin']">Signin</a></li>
                    <li><a [routerLink]="['logout']">Logout</a></li>
                </ul>
            </ul>    
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AuthenticationComponent {

}