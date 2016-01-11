import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {MichaelDuntonComponent} from './components/michaelDunton/michael-dunton.component';
import {KazooComponent} from './components/kazoo/kazoo.component';

@Component({
    selector: 'portfolio',
    styleUrls: ['./app/app.style.css'],
    templateUrl: './app/app.view.html',
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path:'/home', name: 'Home', component: MichaelDuntonComponent, useAsDefault: true},
  {path:'/kazoo', name: 'Kazoo', component: KazooComponent}
])

export class AppComponent {

}
